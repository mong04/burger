const connection = require('./connection.js');

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, burger, cb) {
        var queryString = "INSERT INTO ?? (burger_name) VALUES(??)";
        connection.query(queryString, [table, burger], function(err, result) {
            if (err) throw err;
            cb(result);
        });  
    },
    updateOne: function(table, eaten, id, cb) {
        var queryString = "UPDATE ?? SET devoured = ?? WHERE id = ??";
        connection.query(queryString, [table, eaten, id], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;