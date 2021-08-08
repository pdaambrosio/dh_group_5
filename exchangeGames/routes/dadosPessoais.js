const express = require('express');
const  dadosPessoais = require('../controller/dadosPessoaisController');
const router = express.Router();

router.get('/', dadosPessoais.dadosPessoais)
router.post('/',dadosPessoais.salvarDadosPessoais)

module.exports = router