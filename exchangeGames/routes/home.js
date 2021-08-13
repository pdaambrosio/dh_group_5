var express = require('express');
var router = express.Router();
const homeController = require('../controller/homeController')

router.get('/', homeController.home);
router.get('/sair', homeController.sair);
router.get('/quem-somos', homeController.quem);
router.get('/perguntas', homeController.perguntas);
router.get('/politica', homeController.politica);
router.get('/produto', homeController.produto);

module.exports = router

