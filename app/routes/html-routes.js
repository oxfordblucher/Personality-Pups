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
            optionA: questions.questions[req.params.number].options.optionA,
            optionB: questions.questions[req.params.number].options.optionB,
            optionC: questions.questions[req.params.number].options.optionC,
        }
        res.render("question-block", qObj)
    });


};