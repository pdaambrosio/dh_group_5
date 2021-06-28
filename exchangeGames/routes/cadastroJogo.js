const express = require('express');
const router = express.Router();

/*Importando o multer*/
const multer = require('multer')
const upload = multer({
    dest: './uploads/'
})

const CadastroJogoController = require('../controller/cadastroJogoController')

router.get('/', CadastroJogoController.cadastroJogo)

router.post('/cadastroJogo', CadastroJogoController.cadastrandoJogo)

/*Rota upload*/
router.post('/upload', upload.single('foto'), (req, res) => {
    console.log(req.file)
    res.send(204)
})


module.exports = router 
