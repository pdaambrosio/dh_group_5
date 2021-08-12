const models = require('../models'); 

module.exports.cadastrarUsuario = async function (dadosUsuario) { 
    const usuario = await models.usuarios.create(dadosUsuario); 
};

module.exports.atualizarUsuario = async function (usuario, usuarioId) { 
    const user = await models.usuarios.update(usuario, {
        where: { id: usuarioId }
    });
};