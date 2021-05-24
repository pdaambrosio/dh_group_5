const express = require('express');
const router = express.Router();

const CadastroJogo = require('../controller/cadastroJogoController')

router.get('/', CadastroJogo.cadastroJogo)


module.exports = router
