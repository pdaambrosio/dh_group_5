const express = require('express');
const router = express.Router();
const path = require('path');
const uuid = require('uuid').v4

const uploads= []

/*Importando o multer*/
const multer = require('multer')

/*const upload = multer({
    dest: 'uploads/'
})*/

const storage = multer.diskStorage({
    destination: (req, files, cb) => {
        const formatosAceitos = ['image/jpeg', 'image/png']
        
        if (formatosAceitos.includes(files.mimetype)) {
            cb(null, path.join(__dirname,'../public/uploads'))
        } else {
            cb('Formatos aceitos: .JPG e .PNG')
        }
    },
    filename: (req, files, cb) => {
        cb(null, `${uuid()}_${files.originalname}`)
    }
})

const upload = multer({
    storage
})

const CadastroJogoController = require('../controller/cadastroJogoController')

router.get('/', CadastroJogoController.cadastroJogo)

router.post('/cadastroJogo', CadastroJogoController.cadastrandoJogo)

/*Rota upload single
router.post('/upload', upload.single('foto'), (req, res) => {
    console.log(req.file)
    res.send(204)
})
*/

/*Rota upload multiple*/

router.post('/multiupload', upload.array('fotos'), (req, res) => {
    console.log(req.files)
    for(let file of req.files){
    uploads.push(file.filename)
    }
    console.log(req.body)
    res.send(204)
})

/*Rota detalhes teste*/
router.get('/teste-detalhes', (req, res) => {
    res.render('detalhesTeste', { images:uploads })
})

module.exports = router  
 