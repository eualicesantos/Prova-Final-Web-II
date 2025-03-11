const sequelize = require('../config');
const Aluno = require('./aluno');
const Disciplina = require('./disciplina');
const Solicitacao = require('./solicitacao');

Aluno.hasMany(Solicitacao, { foreignKey: 'alunos_id' });
Disciplina.hasMany(Solicitacao, { foreignKey: 'disciplinas_id' });
Solicitacao.belongsTo(Aluno, { foreignKey: 'alunos_id' });
Solicitacao.belongsTo(Disciplina, { foreignKey: 'disciplinas_id' });

const syncDatabase = async () => {
    try {
        await sequelize.sync({ alter: true }); 
        console.log('Banco de dados sincronizado com sucesso!');
    } catch (error) {
        console.error('Erro ao sincronizar o banco de dados:', error);
    }
};

module.exports = {
    sequelize,
    Aluno,
    Disciplina,
    Solicitacao,
    syncDatabase
};