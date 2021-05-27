const { lerCadastro } = require('../helpers/lerCadastro');

module.exports.buscarCadastro = function (email) {
    const usuarios = lerCadastro();
    return usuarios.find(usuario => usuario.email === email);
}