const orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insert: function(burgerName, cb) {
        orm.insertOne("burgers", burgerName, cb, function(res) {
            cb(res);
        }); 
    },
    update: function(eaten, id, cb) {
        orm.updateOne("burgers", eaten, id, cb, function(res) {
            cb(res);
        }) 
    }
}

module.exports = burger;