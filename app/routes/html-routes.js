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

    app.get("/results/:id1/:id2/:id3", function (req, res) {
        axios.get(`api/dogs/${req.params.id1}/${req.params.id2}/${req.params.id3}`).then(function (dataInfo) {
            res.render("results");
        })
        
    })

    app.get("/signup", function (req, res) {
        res.render("signUp");
    });

    app.get("/sampleResults", function (req, res) {

        const resultObj = {
            breed1: "Labrador Retriever",
            trait1: "Friendly, loyal and ready to retrieve birds on the hunt or fetch for hours!",
            pic1:"https://upload.wikimedia.org/wikipedia/commons/3/34/Labrador_on_Quantock_%282175262184%29.jpg",
            breed2: "Siberian Husky",
            trait2: "Ready for the iditerod! This sledding pup is independent and loves a job. Best suited for a cold climate.",
            pic2: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Black-Magic-Big-Boy.jpg",
            breed3: "Havanese",
            trait3: "Alert but quiet, these playful pups are ready to be trained!",
            pic3: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/27130852/Havanese-standing-outdoors.jpg"
        }
        res.render("results", resultObj);
    })
};
