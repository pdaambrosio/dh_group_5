const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer')

const CadastroJogoController = require('../controller/cadastroJogoController')

router.get('/', CadastroJogoController.cadastroJogo)

router.post('/cadastroJogo', upload.array('fotos'), CadastroJogoController.cadastrandoJogo)

router.get('/editarJogo/:id', upload.array('fotos'), CadastroJogoController.editarJogo)
router.post('/editarJogo/:id', upload.array('fotos'), CadastroJogoController.editandoJogo)

module.exports = router  