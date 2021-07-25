const models = require('../models'); 

module.exports.cadastrarUsuarioBD = async function (dadosUsuario) { 
    const usuario = await models.usuarios.create(dadosUsuario); 
};