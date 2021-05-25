var express = require('express');
var router = express.Router();
const userController = require('../controller/usersController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', userController.login)

module.exports = router;
