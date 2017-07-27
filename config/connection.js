const mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Fightingpadre!$",
    database: "burgers_db"
});

module.exports = connection;