const express = require('express');
const router = express.Router();
const path = require('path');
const isAuthenticated = require('../middleware/authMiddleware');

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/register.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/loginstudent.html'));
});

router.get('/admin-login', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/loginteacher.html'));
});

router.get('/homepage', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../src/homepage.html'));
});

router.get('/forum', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../src/forum.html'));
});

module.exports = router;