const express = require('express');
const router = express.Router();
const solicitacaoController = require('../controllers/solicitacaoController');

router.get('/', solicitacaoController.getAllSolicitacoes);
router.post('/', solicitacaoController.createSolicitacao);

module.exports = router;