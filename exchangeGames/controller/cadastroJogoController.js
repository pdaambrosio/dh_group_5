const fs = require('fs');
let arrayDeJogos = require('../model/jogos.json')
const db = require('../models')
const {Op} = require('sequelize')

function salvandoJogo(arrayDeJogos) {
    fs.writeFileSync(
      './model/jogos.json',
      JSON.stringify(arrayDeJogos)
    );
}

module.exports.cadastrandoJogo = async (req, res) => {
  const generos = [].concat(req.body.genero)
  console.log(req.body)
  if(req.body.nomeJogo > 150){
      const erro = "Nome maior que 150 caracteres!"
      const genero = await db.Genero.findAll()
      const plataforma = await db.Plataforma.findAll()
      return res.render('cadastroDeJogo', {genero, plataforma, erro})
  }
  const novoJogo = await db.Anuncio.create({
  ano: req.body.anoJogo,
  descricao: req.body.descricao,
  nome: req.body.nomeJogo,
  tempo_uso: req.body.tempoJogo,
  usuarios_id: 1,
  plataformas_id: req.body.console,
  condicao: req.body.condicao,
  chat_id: 1
  })
  for(let i = 0; i < generos.length; i++){
    await db.Anuncio_Genero.create({
    anuncios_id: novoJogo.id,
    generos_id: generos[i]
    })
  }


  res.redirect('/jogos')
}

module.exports.cadastroJogo = async (req, res) => {
  const erro = ""
  const genero = await db.Genero.findAll()
  const plataforma = await db.Plataforma.findAll()
  //console.log(genero[0].toJSON())
  //console.log(plataforma[0].toJSON())
  res.render('cadastroDeJogo', {genero, plataforma, erro})
}


