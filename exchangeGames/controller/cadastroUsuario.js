const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

let cadastroJson = path.join('modules/usuarios.json');

module.exports.cadastro = (req, res) => {
    res.render('cadastroUsuario');
};