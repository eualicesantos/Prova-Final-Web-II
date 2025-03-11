const express = require('express');
const sequelize = require('./config/banco');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use('/api', routes);

sequelize.sync({ force: false }).then(() => {
  console.log('Banco de dados sincronizado');
  app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
});
