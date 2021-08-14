const models = require('../models');

module.exports.buscarDadosPessoaisEmail = async function (email) {
    const dadosPessoais = await models.usuarios.findAll({
        where: { email },
        raw: true
    });
    return dadosPessoais
};

module.exports.buscarDadosPessoaisId = async function (id) {
    const dadosPessoais = await models.usuarios.findAll({
        where: { id },
        raw: true
    });
    return dadosPessoais
};