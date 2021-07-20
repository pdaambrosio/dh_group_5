const fs = require('fs');
const path = require('path');
const cadastroJson = path.join('model/usuarios.json');

module.exports.lerCadastro = function () {
    const ler = fs.readFileSync(cadastroJson);
    const dados = JSON.parse(ler);
    return dados
};