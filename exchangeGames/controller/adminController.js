const fs = require('fs');
let arrayDeJogos = require('../model/jogos.json')

function salvandoJogo(arrayDeJogos) {
    fs.writeFileSync(
      './model/jogos.json',
      JSON.stringify(arrayDeJogos)
    );
}


module.exports.login = function(req, res) {
    res.render('login-admin');
  }

module.exports.cadastrarJogo = function(req, res) {
    res.render('cadastrarJogoAdmin');
  }

module.exports.cadastrandoJogo = (req, res) => {
    const novoJogo = {
        id: ++arrayDeJogos[0],
        ...req.body
    }
    arrayDeJogos[0] = novoJogo.id
    arrayDeJogos.push(novoJogo)    
    salvandoJogo(arrayDeJogos)
    res.redirect('/admin/cadastrar-jogo')    
}

module.exports.uploadImg = (req,res) => {
    res.send(204)
}

