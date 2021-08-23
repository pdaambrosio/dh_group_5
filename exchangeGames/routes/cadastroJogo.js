const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer')
const validaSessao = require ('../middlewares/validaSessao');

const CadastroJogoController = require('../controller/cadastroJogoController')

router.get('/', validaSessao, CadastroJogoController.cadastroJogo)

router.post('/cadastroJogo', validaSessao, upload.array('fotos'), CadastroJogoController.cadastrandoJogo)

router.get('/editarJogo/:id', validaSessao, upload.array('fotos'), CadastroJogoController.editarJogo)
router.post('/editarJogo/:id', validaSessao, upload.array('fotos'), CadastroJogoController.editandoJogo)

module.exports = router  