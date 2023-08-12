const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database')

const movie = db.define('movies', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    title: DataTypes.STRING(150),
    genres: DataTypes.STRING(50),
    year: DataTypes.STRING(50),
    photo: DataTypes.STRING
}, {
    freezeTableName: true,
    timestamps: false
})

console.log (movie === db.models.movies)


module.exports = movie