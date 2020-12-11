module.exports = function(sequelize, DataTypes) {
    const Result = sequelize.define("Result", {
        breed1: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        breed2: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        breed3: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    Result.associate = function(models) {
        Result.belongsTo(models.User, {
            foreignKey: {
                allowNull: true
            }
        });
    }

    return Result;
}