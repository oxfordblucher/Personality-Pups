// Requiring our models and passport as we've configured it

const db = require("../models/index");
const passport = require("../config/passport");

module.exports = function (app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        res.json(req.user);
        console.log(req.user.dataValues);
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", function (req, res) {

        db.User.create({
            email: req.body.email,
            password: req.body.password,
            results: req.body.results
        }).then(function (newUser) {
            console.log(newUser.dataValues.id);
            res.redirect(307, "/api/login");
        })
            .catch(function (err) {
                res.status(401).json(err);
                console.log(err);
            });
    });



    // Route for logging user out
    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });

    app.get("/api/user/:id", function(req, res) {
        if (!req.user) {
            res.json({});
        } else {
            res.json(req.user.dataValues);
        }
    })

    app.delete("/api/users/:id", function (req, res) {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbResult) {
            res.json(dbResult);
        })
            .catch(function (err) {
                res.status(401).json(err);
            })
    });
}