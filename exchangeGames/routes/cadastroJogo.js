const express = require('express');
const router = express.Router();

const CadastroJogoController = require('../controller/cadastroJogoController')

router.get('/', CadastroJogoController.cadastroJogo)

//router.post('/', CadastroJogoController)

router.get('/cadastroJogo', CadastroJogoController.cadastroJogo);

router.post('/cadastrandoJogo', CadastroJogoController.cadastrandoJogo)


module.exports = router
