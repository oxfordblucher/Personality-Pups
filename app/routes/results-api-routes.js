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

  app.post("/api/results", function(req, res) {
    console.log(req.user);
    db.Result.create({
      breed1: req.body.breed1,
      breed2: req.body.breed2,
      breed3: req.body.breed3
    }).then(function () {
      res.redirect(307, "api/results")
    })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

//    // PUT route for updating results
//    app.put("/api/results", function(req, res) {
//     db.Result.update(req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//       })
//       .then(function(dbResult) {
//         res.json(dbResult);
//       });
//   });

//   // DELETE route for deleting results
//   app.delete("/api/results/:id", function(req, res) {
//     // Delete a result with the id available to us in req.params.id
//     db.Result.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbResult) {
//       res.json(dbResult);
//     });
//   });

};