const bcrypt = require('bcrypt')
const { consultaSenha } = require('../helpers/validarSenha');
const { validarSenha } = require('../helpers/validarSenha');

module.exports.suaConta = (req, res) => {
  res.render('suaConta');
}

module.exports.fazLogin = async (req, res) => {
  const login = req.body;
  const senhaBanco = await consultaSenha(login.email);

  if (!senhaBanco) {
    res.redirect('/users/login')
  } else {
    if (await validarSenha(login.senha, senhaBanco)) {
      res.redirect('/users/suaConta')
    } else {
      res.redirect('/users/login')
    }
  }
}

module.exports.paginaLogin = (req, res, next) => {
  res.render('login');
}