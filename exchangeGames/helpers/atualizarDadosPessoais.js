const models = require('../models');

module.exports.atualizarDadosPessoais = async function (dadosAtualizados, usuarioId) { 
    const user = await models.usuarios.update(dadosAtualizados, {
        where: { id: usuarioId }
    });
};