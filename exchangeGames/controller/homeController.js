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

module.exports.logout = function(req, res) {
  req.session.destroy(); 
  res.redirect('/home')
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

  module.exports.buscar = async function(req, res) {
    const plataformas = await db.Plataforma.findAll()
    const generos = await db.Genero.findAll()    
    res.render('buscarJogos', {
      usuarioLogado: req.session.nickname, plataformas, generos
    });
  }

  module.exports.pesquisarAnuncios = async function(req, res) {
    let nome = req.query.nomeAnuncio ? req.query.nomeAnuncio : ''
    let console = req.query.console ? req.query.console : ''
    let condicao = req.query.condicao ? req.query.condicao : ''
    let genero = req.query.genero ? req.query.genero : ''
    let nickUsuario = req.query.nickUsuario ? req.query.nickUsuario : ''

    

    
    let resultado = await db.Anuncio.findAll({
      where: {
        [Op.and]:{
          nome : {[Op.like]: `%${nome}%`},
          condicao: {[Op.like]: `%${condicao}%`}
        }
      },
      include: [
        {model: db.Plataforma, where: {console: {[Op.like]: `%${console}%`}}}, 
        {model: db.Genero, as: 'generos', where: {nome: {[Op.or]:[genero,{[Op.like]: `%${genero}%`}]}}}, 
        {model: db.Imagem, where: {foto_principal: 1}},
        {model: db.usuarios, as: 'usuario', where: {nickname: {[Op.like]: `%${nickUsuario}%`} }}
      ]
    })
    return res.send(resultado)
  }