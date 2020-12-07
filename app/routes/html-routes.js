const db = require("../models/index");
const path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
    app.get("/", function(req, res) {
        if (req.user) {
            res.redirect("/members")
        }
        res.sendFile(path.join(__dirname, "..models/users.js"));
    });
    app.get("/signIn", function(req, res) {
        if (req.user) {
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "..models/users.js"))
    })
    app.get("/members", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "..models/users.js"));
    })
app.post("/pups", function(req, res) {
    db.quizzes.create({
        quiz: req.body.pup,
    }).then(function() {
        res.sendFile(path.join(__dirname, "..models/users.js"));
    })

})
app.post("/results", function(req, res) {
    db.quizzes.create({
        result: req.body.results,

    }).then(function (req, res) {
        res.sendFile(path.join(__dirname, "..layouts/results.handlebars"));
    })
})
};