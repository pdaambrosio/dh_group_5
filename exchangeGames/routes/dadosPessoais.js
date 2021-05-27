const express = require('express');
const  dadosPessoais = require('../controller/dadosPessoais');
const router = express.Router();


router.get('/', dadosPessoais.dadosPessoais)


module.exports = router