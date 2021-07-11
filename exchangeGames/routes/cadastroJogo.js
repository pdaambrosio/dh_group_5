const express = require('express');
const router = express.Router();
const path = require('path');

/*Importando o multer*/
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, files, cb) => {
        const formatosAceitos = ['image/jpeg', 'image/png']
        
        if (formatosAceitos.includes(files.mimetype)) {
            cb(null, path.join(__dirname,'../uploads'))
        } else {
            cb('Formatos aceitos: .JPG e .PNG')
        }
    },
    filename: (req, file, cb) => {
        cb(null,file.originalname)
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
    res.send(204)
})


module.exports = router  
