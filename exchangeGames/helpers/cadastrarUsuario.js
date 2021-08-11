const models = require('../models'); 

module.exports.cadastrarUsuario = async function (dadosUsuario) { 
    const usuario = await models.usuarios.create(dadosUsuario); 
};

module.exports.atualizarUsuario = async function (usuarioEmail) { 
    const usuario = await models.usuarios.destroy({
        where: { email: usuarioEmail }
    }); 
};