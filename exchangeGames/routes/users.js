const express = require('express');
const router = express.Router();
const validaSessao = require ('../middlewares/validaSessao');
const loginUsuario = require('../controller/loginUsuarioController');

router.get('/login', loginUsuario.paginaLogin);
router.post('/login', loginUsuario.fazLogin);
router.get('/suaConta', validaSessao, loginUsuario.suaConta);

module.exports = router; 