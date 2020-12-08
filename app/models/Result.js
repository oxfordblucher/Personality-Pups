module.exports = function(sequelize, DataTypes) {
    const Result = sequelize.define("Result", {
        labrador: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        germanShep: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        golden: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        frenchie: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        englishBull: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        poodle: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        beagle: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rottweiler: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        pointer: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        corgi: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        dachshund: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        yorkie: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        australian: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        boxer: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        husky: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        spaniel: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        dane: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        schnauzer: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        doberman: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        shihtzu: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        bostonTerrier: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        havanese: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        bernese: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        pomeranian: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        shetland: {
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