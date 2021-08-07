const uuid = require('uuid').v4
const multer = require('multer')
const path = require('path');

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

module.exports = multer({
    storage
})
