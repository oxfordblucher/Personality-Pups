module.exports = function(sequelize, DataTypes) {
    const dog = sequelize.define("dog", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        trait: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        picUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return dog;
}