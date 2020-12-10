const db = require("../models/index");
const path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const questions = require("../questions")

module.exports = function(app) {
    
    app.get("/", function(req, res) {
        res.render("landingpage");
    });

    app.get("/question/:number", function(req, res) {
        const qObj = {
            id: req.params.number,
            question: questions.questions[req.params.number].question,
            optionA: {
                qID: req.params.number,
                name: questions.questions[req.params.number].options.optionA.name,
                keys: questions.questions[req.params.number].options.optionA.keys
            },
            optionB: {
                qID: req.params.number,
                name: questions.questions[req.params.number].options.optionB.name,
                keys: questions.questions[req.params.number].options.optionB.keys
            },
            optionC: {
                qID: req.params.number,
                name: questions.questions[req.params.number].options.optionC.name,
                keys: questions.questions[req.params.number].options.optionC.keys
            }
        }
        res.render("question-block", qObj);
    });

    app.get("/result", function(req, res) {
        res.render("results");
    });

    app.get("/login", function(req, res) {
        res.render("login");
    });

};