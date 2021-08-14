const fs = require('fs');
let arrayDeJogos = require('../model/jogos.json')
const db = require('../models')
const {Op} = require('sequelize')

async function buscarGeneroPlataforma () {
  const genero = await db.Genero.findAll()
  const plataforma = await db.Plataforma.findAll()
  return [genero, plataforma]
}

module.exports.cadastrandoJogo = async (req, res) => {
  const generos = [].concat(req.body.genero)
  //console.log(req.body)
  if(!req.body.nomeJogo){
    const erro = "Insira um nome para o jogo."
    const retorno = await buscarGeneroPlataforma()
    return res.render('cadastroDeJogo', {genero:retorno[0], plataforma:retorno[1], erro})
  }
  if(req.body.nomeJogo.length > 150){
    //console.log(req.body.nomeJogo + " " + req.body.nomeJogo.length)
      const erro = "Atenção: Nome maior que 150 caracteres."
      const retorno = await buscarGeneroPlataforma()
      return res.render('cadastroDeJogo', {genero:retorno[0], plataforma:retorno[1], erro})
  }
  if(!req.body.anoJogo){
    const erro = "Atenção: Insira o ano do jogo."
    const retorno = await buscarGeneroPlataforma()
    return res.render('cadastroDeJogo', {genero:retorno[0], plataforma:retorno[1], erro})
  }
  if(req.body.anoJogo.length != 4){
      const erro = "Atenção: Formato do ano aceito: AAAA"
      const retorno = await buscarGeneroPlataforma()
      return res.render('cadastroDeJogo', {genero:retorno[0], plataforma:retorno[1], erro})
  }
  if(!req.body.descricao){
    const erro = "Atenção: Insira uma descrição para o anúncio."
    const retorno = await buscarGeneroPlataforma()
    return res.render('cadastroDeJogo', {genero:retorno[0], plataforma:retorno[1], erro})
  }
  if(req.body.descricao.length > 1500){
    const erro = "Atenção: Descrição maior que 1500 caracteres."
    const retorno = await buscarGeneroPlataforma()
    return res.render('cadastroDeJogo', {genero:retorno[0], plataforma:retorno[1], erro})
  }
  if(!req.body.tempoJogo){
    const erro = "Atenção: Insira o tempo de uso."
    const retorno = await buscarGeneroPlataforma()
    return res.render('cadastroDeJogo', {genero:retorno[0], plataforma:retorno[1], erro})
  }
  if(req.body.tempoJogo.length > 25){
    const erro = "Atenção: Tempo de uso maior que 25 caracteres."
    const retorno = await buscarGeneroPlataforma()
    return res.render('cadastroDeJogo', {genero:retorno[0], plataforma:retorno[1], erro})
  }
  if(!req.files.filename){
    const erro = "Atenção: Envie ao menos uma foto do seu jogo."
    const retorno = await buscarGeneroPlataforma()
    return res.render('cadastroDeJogo', {genero:retorno[0], plataforma:retorno[1], erro})
  }
  console.log(req.files)
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


