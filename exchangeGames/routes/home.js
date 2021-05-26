var express = require('express');
var router = express.Router();
const homeController = require('../controller/home')

router.get('/', homeController.home);

router.get('/quem-somos', homeController.quem);

router.get('/perguntas', homeController.perguntas);

router.get('/politica', homeController.politica);

/*Para exibirmos o jogo na Home.
Indicamos para a rota o parâmetro id*/

router.get('/produto/:id', homeController.produto);

  module.exports = router

