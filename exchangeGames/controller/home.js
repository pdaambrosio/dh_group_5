const arrayDeJogos = require('../model/jogos.json')
const db = require('../models')
const {Op} = require('sequelize')

module.exports.home = async function(req, res) {
    const jogos = await db.Anuncio.findAll({
    include: [db.Plataforma, db.Imagem]
  })
  res.render('home', {jogos});
}

module.exports.quem = function(req, res) {
    res.render('quem-somos');
  }

module.exports.perguntas = function(req, res) {
    res.render('perguntasFrequentes');
  }

module.exports.politica = function(req, res) {
    res.render('politicaDePrivacidade');
  }

module.exports.produto = function(req, res) {
    res.render('detalhesDoProduto');
  }

  