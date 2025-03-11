const Disciplina = require('../models/disciplina');

exports.create = async (req, res) => {
  try {
    const disciplina = await Disciplina.create(req.body);
    res.status(201).json(disciplina);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const disciplinas = await Disciplina.findAll();
    res.json(disciplinas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
