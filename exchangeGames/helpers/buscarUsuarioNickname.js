const models = require('../models'); 

module.exports.buscarUsuarioNickname = async function (nickname) { 
    const usuario = await models.usuarios.findOne({ 
        where: { nickname }, 
    }); 
    console.log(usuario.nickname) 
};