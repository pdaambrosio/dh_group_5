const express = require('express');
const router = express.Router();

const CadastroJogoController = require('../controller/cadastroJogoController')

router.get('/', CadastroJogoController.cadastroJogo)

//router.post('/', CadastroJogoController)

//router.get('/cadastroJogo', CadastroJogoController.cadastroJogo);

router.post('/cadastroJogo', CadastroJogoController.cadastrandoJogo)

module.exports = router 
