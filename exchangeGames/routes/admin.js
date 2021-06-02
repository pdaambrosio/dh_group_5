const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController')

router.get('/login', adminController.login);

router.post('/login', adminController.logando);

router.get('/painel', adminController.painel);

router.post('/painel', adminController.cadastrandoUserAdmin);

module.exports = router
