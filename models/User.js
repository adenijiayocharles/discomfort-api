const { DataTypes } = require("sequelize");
const sequelize = require("../connection/db");

const User = sequelize.define(
    "User",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "user",
        timestamps: false,
    }
);

module.exports = User;
