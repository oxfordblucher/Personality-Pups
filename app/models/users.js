const Sequelize = require("sequelize");

const sequelize = require("../config/connection.js");

const User = sequelize.define("users", {
    UserID: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    FirstName: {type: Sequelize.STRING},
    LastName: {type: Sequelize.STRING},
    Username: {type: Sequelize.STRING},
    Password: {type: Sequelize.STRING, passportplaceholder},
    Quizzed: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
    Personality: {type: Sequelize.STRING, allowNull: true},
    Dog1: {type: Sequelize.STRING, allowNull: true},
    Dog2: {type: Sequelize.STRING, allowNull: true},
    Dog3: {type: Sequelize.STRING, allowNull: true}
},{
    freezeTableName: true
});

User.sync();

module.exports = User;