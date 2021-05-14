var express = require('express');
var router = express.Router();
const homeController = require('../controller/home')

router.get('/quem', homeController.quem);

  module.exports = router

