const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController')

/*Importando o multer para o código*/
const multer = require('multer')
const upload = multer({
    dest: 'uploads/'
})

router.get('/login', adminController.login);

router.get('/cadastrar-jogo', adminController.cadastrarJogo);
router.post('/cadastrandoJogo', adminController.cadastrandoJogo)

/* Criar a rota post para upload.
Chamar o multer entre a rota e o controller 
Explicar o que estamos fazendo upload*/
router.post('/upload', upload.single('arquivo', adminController.uploadImg))


module.exports = router
