const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');
const disciplinaController = require('../controllers/disciplinaController');
const solicitacaoController = require('../controllers/dolicitacaoController');

router.post('/alunos', alunoController.create);
router.get('/alunos', alunoController.getAll);

router.post('/disciplinas', disciplinaController.create);
router.get('/disciplinas', disciplinaController.getAll);

router.post('/solicitacoes', solicitacaoController.create);
router.get('/solicitacoes', solicitacaoController.getAll);
router.patch('/solicitacoes/:id', solicitacaoController.updateStatus);

module.exports = router;
