const models = require('../models'); 

module.exports.buscarUsuarioEmail = async function (email) { 
    const usuario = await models.usuarios.findOne({ 
        where: { email }, 
    }); 
    console.log(usuario.email) 
};