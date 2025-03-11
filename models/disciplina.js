const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Disciplina = sequelize.define('Disciplina', {
  nome: { type: DataTypes.STRING, allowNull: false },
  codigo: { type: DataTypes.STRING, allowNull: false, unique: true }
});

module.exports = Disciplina;