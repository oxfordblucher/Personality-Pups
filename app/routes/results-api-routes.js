var db = require("../models");

module.exports = function(app) {
  // Find all Results and return them to the user with res.json
  app.get("/api/results", function(req, res) {
    db.Result.findAll({}).then(function(dbResult) {
      res.json(dbResult);
    });
  });

  app.get("/api/results/:id", function(req, res) {
    // Find one Result with the id in req.params.id and return them to the user with res.json
    db.Result.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbResult) {
      res.json(dbResult);
    });
  });
};