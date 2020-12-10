const db = require("../models/index");
const path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const questions = require("../questions")

module.exports = function(app) {
    
    app.get("/", function(req, res) {
        res.render("landingpage");
    });

<<<<<<< HEAD
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


=======

    app.get("/getquestion/:number", function(req, res) {
        res.render("index", questions[req.params.number]);

    app.get("/questions/:id", function(req, res) {
        console.log(questions[0]);
        res.render("index", questions[0]);
    });


    // //***Adding in the boilerplate HTML routes for the sign up/login/members locations
    // //*** Depending on how we code the logins w/ the question I have...*/
    // app.get("/", function(req, res) {
    //     // If the user already has an account send them to the members page
    //     if (req.user) {
    //       res.redirect("/members");
    //     }
    //     res.sendFile(path.join(__dirname, "../public/signup.html"));
    //   });

    //   app.get("/login", function(req, res) {
    //     // If the user already has an account send them to the members page
    //     if (req.user) {
    //       res.redirect("/members");
    //     }
    //     res.sendFile(path.join(__dirname, "../public/login.html"));
    //   });
    
    //   // Here we've add our isAuthenticated middleware to this route.
    //   // If a user who is not logged in tries to access this route they will be redirected to the signup page
    //   app.get("/members", isAuthenticated, function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/members.html"));
    //   });
    
    // };

    // Route to display the quiz start page
    app.get.get("/index", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/index.html"));
      });

    // Route to display the results page
    app.get.get("/results", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/results.html"));
    });

>>>>>>> ec9117377ff49e2a729b0c4c6048769b64eb5f1e
};