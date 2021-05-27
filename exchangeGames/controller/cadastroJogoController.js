const fs = require('fs');
let arrayDeJogos = require('../model/jogos.json')

function salvandoJogo(arrayDeJogos) {
    fs.writeFileSync(
      './model/jogos.json',
      JSON.stringify(arrayDeJogos)
    );
}



module.exports.cadastroJogo = (req, res) => {
    res.render('cadastroDeJogo')
   
}



module.exports.cadastrandoJogo = (req, res) => {
  const novoJogo = {
      id: ++arrayDeJogos[0],
      ...req.body
  }
  arrayDeJogos[0] = novoJogo.id
  arrayDeJogos.push(novoJogo)    
  salvandoJogo(arrayDeJogos)
  res.redirect('/cadastroJogo')
}

 