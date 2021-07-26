const bcrypt = require('bcrypt');

module.exports.encriptarSenha = async function (senha) {
    const salt = await bcrypt.genSalt(5)
    return await bcrypt.hash(senha, salt)
};