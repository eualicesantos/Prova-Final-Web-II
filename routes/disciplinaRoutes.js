const express = require('express');
const router = express.Router();
const disciplinaController = require('../controllers/disciplinaController');

router.get('/', disciplinaController.getAllDisciplinas);
router.post('/', disciplinaController.createDisciplina);

module.exports = router;