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
    }).then(function (dbResult) {
      const newResultId = dbResult.dataValues.id;
      res.json(newResultId);
      
      return newResultId;
    })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  app.put("/api/results/", function (req, res) {
    db.Result.findOne({ where: { userId: 0}})
    .then(function (result) {
      console.log(result);
      if (result) {
        result.update({
          UserId: req.body.newId
        })
        .then(function(updatedRows) {
          console.log(updatedRows);
        })
      }
    })
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