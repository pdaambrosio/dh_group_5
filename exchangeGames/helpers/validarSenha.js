const bcrypt = require('bcrypt');

module.exports.validarSenha = async function (senha, hash) {
    return await bcrypt.compare(senha, hash)
};