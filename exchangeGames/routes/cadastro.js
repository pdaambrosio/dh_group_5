var express = require('express');
var router = express.Router();
const cadastroController = require('../controller/cadastroUsuario');

router.get('/cadastroUsuario', cadastroController.cadastro);

module.exports = router