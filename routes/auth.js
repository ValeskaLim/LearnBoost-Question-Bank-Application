const express = require('express');
const router = express.Router();
const path = require('path');
const con = require('../db');
const isAuthenticated = require('../middleware/authMiddleware');

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/register.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/loginstudent.html'));
});

router.post('/regist', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let grades = req.body.grade;

    if(username && password && grades && email){
        con.query('INSERT INTO user(username, password, email, grade) VALUES (?, ?, ?, ?)', [username, password, email, grades], (error, results) =>{
            if(error) throw error;
            if(results.affectedRows > 0){
                res.redirect('/login');
            }
            else{
                res.redirect('/register?error=Registration%20failed');
            }
        });
    } else {
        res.redirect('/register?error=Please%20fill%20in%20all%20fields');
    }
});

router.post('/auth', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let userType = req.body.userType;

    if (username && password) {
        con.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], (error, results) => {
            if (error) throw error;
            if (results.length > 0) {
                req.session.regenerate((err) => {
                    if (err) throw err;
                    req.session.loggedin = true;
                    req.session.username = username;
                    req.session.userType = userType;
                    res.redirect('/homepage');
                });
            } else {
                res.redirect('/?error=Incorrect%20username%20and%20For%20password');
            }
        });
    } else {
        res.redirect('/?error=Please%20enter%20username%20and%20password');
    }
});

router.get('/logout', isAuthenticated, (req, res) =>{
    req.session.destroy();
    res.redirect('/login');
});

router.get('/user-grade', (req, res) => {
    const username = req.session.username;
    con.query('SELECT grade FROM user WHERE username = ?', [username], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Database query error' });
        }
        if (results.length > 0) {
            return res.status(200).json({ grade: results[0].grade });
        } else {
            return res.status(404).json({ error: 'User not found' });
        }
    });
});

router.get('/user-name',  (req, res) => {
    const username = req.session.username;
    con.query('SELECT username FROM user WHERE username = ?', [username], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Database query error' });
        }
        if (results.length > 0) {
            return res.status(200).json({ username: results[0].username });
        } else {
            return res.status(404).json({ error: 'User not found' });
        }
    });
});

module.exports = router;