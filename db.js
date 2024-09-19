const { mode } = require('mathjs');
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "learnboost"
});

con.connect((err) => {
    if(err) throw err;
    console.log('Database Connected!');
});

module.exports = con;