const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Aluno = require('./Aluno');
const Disciplina = require('./Disciplina');

const Solicitacao = sequelize.define('Solicitacao', {
  justificativa: { type: DataTypes.TEXT, allowNull: false },
  status: {
    type: DataTypes.ENUM('pendente', 'aprovado', 'rejeitado'),
    defaultValue: 'pendente'
  }
});

Solicitacao.belongsTo(Aluno, { foreignKey: 'aluno_id' });
Solicitacao.belongsTo(Disciplina, { foreignKey: 'disciplina_id' });

module.exports = Solicitacao;