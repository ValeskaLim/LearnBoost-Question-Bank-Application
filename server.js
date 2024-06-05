const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "learnboost"
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL database.");
});

const app = express();

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'src')));

function isAuthenticated(request, response, next) {
    if (request.session.loggedin) {
        next();
    } else {
        const userType = request.session.userType;
        if (userType === 'student')
            response.redirect('/student-login');
        else if (userType === 'teacher')
            response.redirect('/teacher-login');
        else
            response.redirect('/');
    }
}

// Middleware to protect specific static files
function protectStaticFiles(request, response, next) {
    const protectedFiles = ['/homepage.html'];
    if (protectedFiles.includes(request.path)) {
        isAuthenticated(request, response, next);
    } else {
        next();
    }
}

// Serve static files with protection for specific files
app.use(protectStaticFiles);
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'src/loginstudent.html'));
});

app.get('/admin-login', (request, response) => {
    response.sendFile(path.join(__dirname, 'src/loginteacher.html'));
});

app.post('/auth', (request, response) => {
    let username = request.body.username;
    let password = request.body.password;
    let userType = request.body.userType;

    console.log("Usertype: ", userType);

    if (username && password) {
        con.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], (error, results, fields) => {
            if (error) throw error;
            if (results.length > 0) {
                request.session.regenerate((err) => {
                    if (err) throw err;
                    request.session.loggedin = true;
                    request.session.username = username;
                    request.session.userType = userType;
                    response.redirect('/homepage');
                });
            } else {
                response.redirect('/?error=Incorrect%20username%20and%2For%20password');
            }
        });
    } else {
        response.redirect('/?error=Please%20enter%20username%20and%20password');
    }
});

app.get('/user-grade', isAuthenticated, (request, response) => {
    const username = request.session.username;
    con.query('SELECT grade FROM user WHERE username = ?', [username], (error, results) => {
        if(error){
            return response.status(500).json({ error: 'Database query error' });
        }
        if(results.length > 0){
            return response.status(404).json({ grade: results[0].grade });
        } else {
            return response.status(404).json({ error: 'User not found' });
        }
    });
});

app.get('/user-name', isAuthenticated, (request, response) => {
    const username = request.session.username;
    con.query('SELECT username FROM user WHERE username = ?', [username], (error, results) => {
        if(error){
            return response.status(500).json({ error: 'Database query error' });
        }
        if(results.length > 0){
            return response.status(404).json({ username: results[0].username });
        } else {
            return response.status(404).json({ error: 'User not found' });
        }
    });
});

// Middleware to check if the user is logged in
function isAuthenticated(request, response, next) {
    if (request.session.loggedin) {
        next();
    } else {
            response.redirect('/');
    }
}

// Use the isAuthenticated middleware in the /homepage route
app.get('/homepage', isAuthenticated, (request, response) => {
    response.sendFile(path.join(__dirname, 'src/homepage.html'));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
