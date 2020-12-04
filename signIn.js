var express = require("express");
var router = express.router();

router.get("/", function(req, res, next){
    res.render("index", {title: "User Name"})
});

router.post("/", function(req, res){
    var body = req.body;
})

var res_body = {
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email
};

module.exports = router;