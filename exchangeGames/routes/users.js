const express = require('express');
const router = express.Router();
const usersController = require('../controller/usersController')

router.get('/suaConta', usersController.suaConta);

router.get('/login', usersController.paginaLogin);

router.post('/login', usersController.fazLogin);


module.exports = router;







