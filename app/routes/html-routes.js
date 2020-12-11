const db = require("../models/index");
const path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const questions = require("../questions")
const axios = require("axios");

module.exports = function (app) {

    app.get("/", function (req, res) {
        axios.get('https://dog.ceo/api/breeds/image/random').then(function (data) {

            const picUrlObj = {
                picUrl: data.data.message
            };

            res.render('landingpage', picUrlObj);
        })
    });
   

    app.get("/question/:number", function (req, res) {
        axios.get('https://dog.ceo/api/breeds/image/random').then(function (data) {

            let picUrl = data.data.message;
            
            const qObj = {
                picUrl: picUrl,
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
        })

    });

<<<<<<< HEAD
    app.get("/result", function (req, res) {
        res.render("results");
    });

    app.get("/login", function (req, res) {
        res.render("login");
=======
    app.get("/results", function(req, res) {
        res.render("results");
    });

    app.get("/signup", function(req, res) {
        res.render("signUp");
>>>>>>> 71265197796f26411417bba5f807c285f8c33ac4
    });

};

function getPic() {
    axios.get('https://dog.ceo/api/breeds/image/random').then(function (data) {
        console.log(data);
        let picUrl = data.message;
        return picUrl;
    })
}