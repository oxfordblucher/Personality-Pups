const db = require("../models/index");
const path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const {questions} = require("../questions")

module.exports = function(app) {
    

    app.get("/", function(req, res) {
      /*   v
      ar questionObj={
            questions: questions
        }
        console.log(questionObj); */
        res.render("index");
    });

    app.get("/questions/:id", function(req, res) {
        console.log(questions[0]);
        res.render("index", questions[0]);
    });

    app.get("/getquestion/:number", function(req, res) {
        
        res.render("index", questions[req.params.number]);
    });

    /*app.get("/signIn", function(req, res) {
        if (req.user) {
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../models/User.js"))
    })
    app.get("/members", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../models/User.js"));
    })
    app.post("/pups", function(req, res) {
        db.quizzes.create({
            quiz: req.body.pup,
        }).then(function() {
            res.sendFile(path.join(__dirname, "../models/User.js"));
        })

    })
    app.post("/results", function(req, res) {
        db.quizzes.create({
            result: req.body.results,

        }).then(function (req, res) {
            res.sendFile(path.join(__dirname, "../layouts/results.handlebars"));
        })
    }) */
};