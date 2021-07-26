const e = require('express');
const models = require('../models'); 

module.exports.buscarUsuarioNickname = async function (nickname) { 
    const usuario = await models.usuarios.findOne({ 
        where: { nickname }, 
    });
    try {
        return (usuario.nickname === nickname)
    } catch (e) {
        return false
    }
};