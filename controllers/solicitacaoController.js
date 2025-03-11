const Solicitacao = require('../models/solicitacao');

exports.create = async (req, res) => {
  try {
    const solicitacao = await Solicitacao.create(req.body);
    res.status(201).json(solicitacao);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const solicitacoes = await Solicitacao.findAll();
    res.json(solicitacoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const solicitacao = await Solicitacao.findByPk(id);
    if (!solicitacao) return res.status(404).json({ error: 'Solicitação não encontrada' });

    solicitacao.status = status;
    await solicitacao.save();

    res.json(solicitacao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
