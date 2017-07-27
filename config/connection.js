const mysql = require('mysql');

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "Fightingpadre!$",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;