const connection = require('./connection.js');

var orm = {
    selectAll: function(table) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            return(result)
        });
    },
    insertOne: function(table, burger) {
        var queryString = "INSERT INTO ?? (burger_name) VALUES(??)";
        connection.query(queryString, [table, burger], function(err, result) {
            return(result);
        });  
    },
    updateOne: function(table, eaten, id) {
        var queryString = "UPDATE ?? SET devoured= ?? WHERE ??";
        connection.query(queryString, [table, eaten, id], function(err, result) {
            return(result)
        })
    }
}