const models = require('../models');

module.exports.buscarDadosPessoais = async function (email) {
    const dadosPessoais = await models.usuarios.findAll({
        where: { email },
        raw: true
    });
    return dadosPessoais
};