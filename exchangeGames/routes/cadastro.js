var express = require('express');
var router = express.Router();
const cadastroController = require('../controller/cadastroUsuarioDB');

router.get('/', cadastroController.cadastro);
router.post('/', cadastroController.registrarUsuario);

module.exports = router