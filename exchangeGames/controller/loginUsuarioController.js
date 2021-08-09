const { consultaSenha } = require('../helpers/validarSenha');
const { validarSenha } = require('../helpers/validarSenha');
const { buscarUsuarioEmail } = require('../helpers/buscarUsuarioEmail');

module.exports.suaConta = (req, res) => {
  res.render('suaConta');
};

module.exports.paginaLogin = (req, res) => {
  res.render('login', {
    mensagem: null
  });
};

module.exports.fazLogin = async (req, res) => {
  const login = req.body;
  const senhaBanco = await consultaSenha(login.email);
  const consultarEmail = await buscarUsuarioEmail(login.email);

  if (!consultarEmail) {
    res.render('login', {
        mensagem: 'Email ou senha invalidos.'
    }); return
  };
  
  if (!senhaBanco) {
    res.render('login', {
      mensagem: 'Email ou senha invalidos.'
    }); return
  };

  if (await validarSenha(login.senha, senhaBanco)) {
    req.session.emailUsuario = consultarEmail;
    res.redirect('suaConta');
  } else {
      res.render('login', {
        mensagem: 'Email ou senha invalidos.'
      });
    }
};