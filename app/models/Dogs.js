module.exports = function(sequelize, DataTypes) {
    const dogs = sequelize.define("dogs", {
            name: DataTypes.STRING,
            trait: DataTypes.STRING,
    });

    dogs.associate = function(models) {
        dogs.belongsTo(models.Result, {
            foreignKey: {
                allowNull: true
            }
        });
        dogs.hasMany(models.Result, {
            foreignKey: {
                allowNull: true
            }
        });
    }

    return Result;
}