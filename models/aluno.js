const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Aluno = sequelize.define('Aluno', {
  nome: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  matricula: { type: DataTypes.STRING, allowNull: false, unique: true }
});

module.exports = Aluno;