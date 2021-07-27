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

module.exports.cadastroJogo = async (req, res) => {
    const genero = await db.Genero.findAll()
    console.log(genero[0].toJSON())
    res.render('cadastroDeJogo', {genero:genero})
}

module.exports.cadastrandoJogo = (req, res) => {
  const novoJogo = {
      id: ++arrayDeJogos[0],
      ...req.body
  }
  arrayDeJogos[0] = novoJogo.id
  arrayDeJogos.push(novoJogo)    
  salvandoJogo(arrayDeJogos)
  res.redirect('/jogos')
}

