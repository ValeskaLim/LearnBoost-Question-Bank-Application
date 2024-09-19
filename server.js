const express = require('express');
const session = require('express-session');
const path = require('path');
const latihan_soal = require("./routes/latihan_soal");
const authRoutes = require('./routes/auth');
const pageRoutes = require('./routes/page');
const userAuth = require('./routes/user');
const quizAuth = require('./routes/quiz');
const app = express();

const db = require('./db');

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false
}));

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'src')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/loginstudent.html'));
});

app.use('/', authRoutes);

app.use('/', pageRoutes);

app.use('/', latihan_soal);

app.use('/', quizAuth);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
