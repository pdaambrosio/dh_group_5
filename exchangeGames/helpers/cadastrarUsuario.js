const models = require('../models'); 

module.exports.cadastrarUsuario = async function (dadosUsuario) { 
    const usuario = await models.usuarios.create(dadosUsuario); 
};