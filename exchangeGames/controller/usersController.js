const fs = require('fs')
const path = require('path')
const { lerCadastro } = require('../helpers/lerCadastro');

module.exports.buscarCadastro = function (email) {
  const usuario = lerCadastro();
  return usuario.find(usuarios => usuarios.email === email);
}

module.exports.suaConta = (req, res) => {
  res.render('suaConta');
}

