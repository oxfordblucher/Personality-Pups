const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("users", function(res) {
            cb(res);
        });
    },
    
    insertOne: function(col, name, cb) {
        orm.insertOne("users", col, name, function(res) {
            console.log(col),(name)
            cb(res);
        })
    },

    updateOne: function(userVals, condition, cb) {
        orm.updateOne("users", userVals, condition, function(res) {
            cb(res);
        })
    }
}

module.exports = users;