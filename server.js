const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');
const { request } = require('http');
const latihan_soal = require("./routes/latihan_soal");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "learnboost"
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
        response.redirect('/login');
    }
}

app.use(express.static(path.join(__dirname, 'src')));

app.get('/login', (request, response) => {
    response.sendFile(path.join(__dirname, 'src/loginstudent.html'));
});

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'src/loginstudent.html'));
});

app.get('/register', (request, response) => {
    response.sendFile(path.join(__dirname, 'src/register.html'));
});

app.get('/admin-login', (request, response) => {
    response.sendFile(path.join(__dirname, 'src/loginteacher.html'));
});

app.post('/regist', (request, response) =>{
    let username = request.body.username;
    let password = request.body.password;
    let email = request.body.email;
    let grades = request.body.grade;

    if(username && password && grades && email){
        con.query('INSERT INTO user(username, password, email, grade) VALUES (?, ?, ?, ?)', [username, password, email, grades], (error, results, fields) =>{
            if(error) throw error;
            if(results.affectedRows > 0){
                response.redirect('/login');
            }
            else{
                response.redirect('/register?error=Incorrect%20username%20and%2For%20password');
            }
        });
    } else {
        response.redirect('/register?error=Please%20fill%20data');
    }
});

app.post('/auth', (request, response) => {
    let username = request.body.username;
    let password = request.body.password;
    let userType = request.body.userType;

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
        if (error) {
            return response.status(500).json({ error: 'Database query error' });
        }
        if (results.length > 0) {
            return response.status(404).json({ grade: results[0].grade });
        } else {
            return response.status(404).json({ error: 'User not found' });
        }
    });
});

app.get('/user-name', isAuthenticated, (request, response) => {
    const username = request.session.username;
    con.query('SELECT username FROM user WHERE username = ?', [username], (error, results) => {
        if (error) {
            return response.status(500).json({ error: 'Database query error' });
        }
        if (results.length > 0) {
            return response.status(404).json({ username: results[0].username });
        } else {
            return response.status(404).json({ error: 'User not found' });
        }
    });
});

function isAuthenticated(request, response, next) {
    if (request.session.loggedin) {
        next();
    } else {
        response.redirect('/');
    }
}

app.get('/homepage', isAuthenticated, (request, response) => {
    response.sendFile(path.join(__dirname, 'src/homepage.html'));
});

app.use('/latihan_soal', isAuthenticated, latihan_soal);

app.get('/forum', isAuthenticated, (request, response) => {
    response.sendFile(path.join(__dirname, 'src/forum.html'));
});

app.get('/questions', (request, response) => {
    const subchapterName = request.query.subchapter_name;
    if (!subchapterName) {
        return response.status(400).send('subchapter_name is required');
    }
    const query = `
        SELECT q.question_id, q.question_text, o.option_id, o.option_text, s.subject_name 
        FROM questions q 
        JOIN options o ON q.question_id = o.question_id 
        JOIN subjects s ON q.subject_id = s.subject_id 
        WHERE s.subchapter_name = ? 
        ORDER BY q.question_id, o.option_id`;

    con.query(query, [subchapterName], (err, results) => {
        if (err) {
            console.error('Error fetching questions:', err);
            return response.status(500).send('Error fetching questions');
        }

        const questionsMap = {};
        results.forEach(row => {
            if (!questionsMap[row.question_id]) {
                questionsMap[row.question_id] = {
                    question_id: row.question_id,
                    question_text: row.question_text,
                    options: []
                };
            }
            questionsMap[row.question_id].options.push({
                option_id: row.option_id,
                option_text: row.option_text
            });
        });

        const questions = Object.values(questionsMap);
        response.json(questions);
    });
});

app.use(express.json());

app.post('/check-answer', (request, response) => {
    const { question_id, selected_option_id } = request.body;
    const query = `
        SELECT correct_option_id 
        FROM answers 
        WHERE question_id = ?
    `;
    con.query(query, [question_id], (err, results) => {
        if (err) {
            console.error('Error checking answer:', err);
            response.status(500).send('Error checking answer');
            return;
        }

        if (results.length === 0) {
            result.status(404).send('Question not found');
            return;
        }

        const correct = results[0].correct_option_id === selected_option_id;
        response.json({ correct });
    });
});

app.get('/logouts', isAuthenticated, (request, response) =>{
    request.session.destroy();
    response.redirect('/login');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
