const bcrypt = require('bcrypt')
const { buscarUsuarioEmail } = require('../helpers/buscarUsuarioEmail');

module.exports.suaConta = (req, res) => {
  res.render('suaConta');
}

module.exports.fazLogin = async (req, res) => {
  const login = req.body;
  const usuarios = await buscarUsuarioEmail(login.email);

  if (!usuarios) {
    res.send(404)
  } else {
    if (await validarSenha(login.senha, usuarios.hash)) {
      res.redirect('/users/suaConta')
    } else {
      res.send(400)
    }
  }
}

module.exports.paginaLogin = (req, res, next) => {
  res.render('login');
}

async function validarSenha(senha, hash) {
  return await bcrypt.compare(senha, hash)
}
 
