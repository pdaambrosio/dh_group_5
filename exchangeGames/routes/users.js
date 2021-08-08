const express = require('express');
const router = express.Router();
const validaSessao = require ('../middlewares/validaSessao');
const loginUsuario = require('../controller/loginUsuarioController');

router.get('/suaConta', validaSessao, loginUsuario.suaConta);
router.get('/login', loginUsuario.paginaLogin);
router.post('/login', loginUsuario.fazLogin);

module.exports = router; 