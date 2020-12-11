var db = require("../models");

module.exports = function (app) {

  app.get("/api/results/:id", function (req, res) {
    // Find one Result with the id in req.params.id and return them to the user with res.json
    db.Result.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbResult) {
      res.json(dbResult);
    });
  });

  app.post("/api/results", function (req, res) {
    db.Result.create({
      breed1: req.body.breed1,
      breed2: req.body.breed2,
      breed3: req.body.breed3
    }).then(function () {
      res.json('Success!')
    })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  app.put("/api/results/:id", function (req,res) {
    db.Result.update(
      {userId: req.body.userId},
      {where: req.params.id}
    )
    .then(function (rowsUpdated) {
      res.json(rowsUpdated)
    })
    .catch(next)
  });

  app.delete("/api/results/:id", function (req, res) {
    // Delete a result with the id available to us in req.params.id
    db.Result.destroy({
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

};