var express = require('express');
var router = express.Router();
const homeController = require('../controller/homeController')

router.get('/', homeController.home);
router.get('/logout', homeController.logout);
router.get('/quem-somos', homeController.quem);
router.get('/perguntas', homeController.perguntas);
router.get('/politica', homeController.politica);
router.get('/produto/:id', homeController.produto);
router.get('/buscar', homeController.buscar);
router.get('/pesquisarAnuncios', homeController.pesquisarAnuncios);

module.exports = router

