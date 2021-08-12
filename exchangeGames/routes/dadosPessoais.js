const express = require('express');
const validaSessao = require ('../middlewares/validaSessao');
const dadosPessoais = require('../controller/dadosPessoaisController');
const router = express.Router();

router.get('/', validaSessao, dadosPessoais.dadosPessoais);
router.post('/', validaSessao, dadosPessoais.salvarDadosPessoais);
// router.post('/editar', validaSessao, dadosPessoais.editarDadosPessoais);

module.exports = router