const db = require("../models/index");
const path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const {questions} = require("../public/assets/js/pups")

module.exports = function(app) {
    
    //***Why is the route going to models? */
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../models/User.js"));
    });

    //***This is going to the pups.js file? Is it connecting? */
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


    // ***DELETE?
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