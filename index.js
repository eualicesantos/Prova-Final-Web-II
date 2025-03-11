const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/banco');

const app = express();
app.use(bodyParser.json());

const alunoRoutes = require('./routes/alunoRoutes');
const disciplinaRoutes = require('./routes/disciplinaRoutes');
const solicitacaoRoutes = require('./routes/solicitacaoRoutes');

app.use('/alunos', alunoRoutes);
app.use('/disciplinas', disciplinaRoutes);
app.use('/solicitacoes', solicitacaoRoutes);

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000');
    });
}).catch(err => console.log(err));

