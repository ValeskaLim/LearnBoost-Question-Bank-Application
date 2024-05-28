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
    saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'src'))); // Serve static files from the 'src' directory

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'src/selection.html'));
});

app.get('/student-login', (request, response) => {
    response.sendFile(path.join(__dirname, 'src/loginstudent.html'));
});

app.get('/teacher-login', (request, response) => {
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
                request.session.loggedin = true;
                request.session.username = username;
                response.redirect('/homepage.html');
            } else {
                if(userType === 'student')
                    response.redirect('/student-login?error=Incorrect%20username%20and%2For%20password');
                else if(userType === 'teacher')
                    response.redirect('/teacher-login?error=Incorrect%20username%20and%2For%20password');
                else {
                    response.redirect('/?error=Unknown%20user%20type');
                }
            }
        });
    } else {
        if(userType === 'student')
            response.redirect('/student-login?error=Please%20enter%20username%20and%20password');
        else if(userType === 'teacher')
            response.redirect('/teacher-login?error=Please%20enter%20username%20and%20password');

    }
});

app.get('/homepage', (request, response) => {
    if (request.session.loggedin) {
        response.send(`Welcome back, ${request.session.username}!`);
    } else {
        response.send('Please login to view this page!');
    }
    response.end();
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
