const db = require('../models')
const {Op} = require('sequelize')

module.exports.home = async function(req, res) {
  const jogos = await db.Anuncio.findAll({
    include: [db.Plataforma, db.Imagem]
  })
  res.render('home', {
    usuarioLogado: req.session.nickname,
    jogos
  });
}

module.exports.logout = function(req, res) {
  req.session.destroy(); 
  res.render('home', {
    usuarioLogado: null
  });
}

module.exports.quem = function(req, res) {
    res.render('quem-somos', {
      usuarioLogado: req.session.nickname
    });
  }

module.exports.perguntas = function(req, res) {
    res.render('perguntasFrequentes', {
      usuarioLogado: req.session.nickname
    });
  }

module.exports.politica = function(req, res) {
    res.render('politicaDePrivacidade', {
      usuarioLogado: req.session.nickname
    });
  }

module.exports.produto = function(req, res) {
    res.render('detalhesDoProduto', {
      usuarioLogado: req.session.nickname
    });
  }

  