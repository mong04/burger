const express = require('express');
var router = express.Router();

const burger = require('../models/burger.js');

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    burger.insert(req.body.name, function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    burger.update(true, req.params.id, function() {
        res.redirect("/");
    })
})

module.exports = router;