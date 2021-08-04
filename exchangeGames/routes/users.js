const express = require('express');
const router = express.Router();
const loginUsuario = require('../controller/loginUsuarioController')

router.get('/suaConta', loginUsuario.suaConta);
router.get('/login', loginUsuario.paginaLogin);
router.post('/login', loginUsuario.fazLogin);

module.exports = router; 