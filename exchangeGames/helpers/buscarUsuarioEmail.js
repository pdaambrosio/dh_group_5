const e = require('express');
const models = require('../models');

module.exports.buscarUsuarioEmail = async function (email) { 
    const usuario = await models.usuarios.findOne({ 
        where: { email }, 
    });
    try {
        return (usuario.email === email)
    } catch (e) {
        return false
    }
};