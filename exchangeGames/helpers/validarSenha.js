const bcrypt = require('bcrypt');
const models = require('../models');

module.exports.consultaSenha = async function (email) {
    const usuario = await models.usuarios.findOne({ 
        where: { email }, 
    });
    return usuario.senha
};

module.exports.validarSenha = async function (senha, hash) {
    return await bcrypt.compare(senha, hash)
};