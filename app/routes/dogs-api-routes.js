var db = require("../models");

module.exports = function(app) {
 app.get("/api/dogs/:id", function(req, res) {
    // Find one dogs with the id in req.params.id and return them to the user with res.json
    db.dogs.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbdogs) {
      res.json(dbdogs);
    });
  });

};