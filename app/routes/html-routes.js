const User = require("../models/users");
const express = require

module.exports = function(app) {
    app.get("/api/all", function(req, res) {
        if (req.user) {
            res.redirect("/users")
        }
        res.sendfile(path.join(__dirname, "..models/users.js"));
    });
    app.get("/users", function(req, res) {
        if (req.user) {
            res.redirect("/users");
        }
        res.sendfile(path.join(__dirname, "..models/users.js"))
    })
    app.get("/users", isAuthenticated, function(req, res) {
        res.sendfile(path.join(__dirname, "..models/users.js"));
    })

};