const db = require("../models/index");
const passport = require("../config/passport");

module.exports = function(app) {

   
    app.post("/api/index", passport.authenticate("local"), function(req, res) {
        res.json(req.user)

    });
    app.post("/api/index", function(req, res) {
        db.user.create({
            email: req.body.email,
            password: req.body.password
        }).then(function(){
            res.redirect(307, "api/signIn")
        })
        .catch(function(err) {
            res.status(401).json(err);
        });

    })
    app.get("/api/users", function(req, res) {
        if(!req.user) {
            res.json({});
        }
        else { res.json ({
            email: req.body.email,
            id: req.body.id
        });
    };
    });
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    })
    

}