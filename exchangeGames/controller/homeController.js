const db = require('../models')
const {Op} = require('sequelize')

module.exports.home = async function(req, res) {
  const jogos = await db.Anuncio.findAll({
    include: [db.Plataforma, db.Imagem]
  })
const jogosNintendo = jogos.filter((jogo) => jogo.Plataforma.marca == 'Nintendo')
const jogosXbox = jogos.filter((jogo) => jogo.Plataforma.marca == 'Microsoft')
const jogosPS = jogos.filter((jogo) => jogo.Plataforma.marca == 'Sony')

  console.log(jogos[0].Plataforma.marca)
  res.render('home', {
    usuarioLogado: req.session.nickname,
    jogosNintendo, jogosXbox, jogosPS
  });
}

module.exports.logout = async function(req, res) {
  const jogos = await db.Anuncio.findAll({
    include: [db.Plataforma, db.Imagem]
  })
  req.session.destroy(); 
  res.render('home', {
    usuarioLogado: null,
    jogos
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

module.exports.produto = async function(req, res) {
    const anuncio = await db.Anuncio.findOne({
      where: {id: req.params.id},
      include: [db.Plataforma, db.Imagem, 'generos', 'usuario']
    })
    //console.log(anuncio)
    res.render('detalhesDoProduto', {
      usuarioLogado: req.session.nickname,
      anuncio
    });
  }

  