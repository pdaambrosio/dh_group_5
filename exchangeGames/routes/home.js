var express = require('express');
var router = express.Router();
const homeController = require('../controller/home')

router.get('/quem-somos', homeController.quem);


  module.exports = router

