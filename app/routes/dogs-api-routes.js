const { Sequelize } = require("../models/index");
var db = require("../models/index");

module.exports = function (app) {
  app.get("/api/dogs/:id", function (req, res) {
    // Find one dogs with the id in parseInt(req.params.id )and return them to the user with res.json
    db.dog.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbdogs) {
      res.json(dbdogs);
    });
  });

  app.get("/api/dogs/:id1/:id2/:id3", function (req, res) {
    // Find one Result with the id in req.params.id and return them to the user with res.json
    db.dog.findAll({
      where: {id: [req.params.id1, req.params.id2, req.params.id3]}
    }).then(function (dbResult) {
      console.log(dbResult);
      res.json(dbResult);
    });
  });

};