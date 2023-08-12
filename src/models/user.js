const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database')

const user = db.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    email: DataTypes.STRING(50),
    gender: DataTypes.STRING(50),
    password: DataTypes.STRING(50),
    role: DataTypes.STRING(50)
}, {
    freezeTableName: true,
    timestamps: false
})

console.log (user === db.models.users)

module.exports = user