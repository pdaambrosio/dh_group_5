var express = require('express');
var router = express.Router();
const adminController = require('../controller/adminController')

router.get('/login', adminController.login);


  module.exports = router
