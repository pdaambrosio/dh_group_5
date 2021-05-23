var express = require('express');
var router = express.Router();
const suaContaController = require('../controller/suaContaController');

router.get('/', suaContaController.suaConta);

module.exports = router