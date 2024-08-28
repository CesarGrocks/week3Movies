const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Director = sequelize.define('director', {
    campo1: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Director;