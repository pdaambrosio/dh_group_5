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

/*Copiar e colar estas funções na rota cadastroJogo*/

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

/*Os jogos cadastrados serão um array.
Este array será salvo na pasta model como um banco de dados "fake" que será o json.
Sempre que cadastrarmos um novo jogo, será adicionado no json.
*/ 

/*Para cadastrar jogo fora do "admin", podemos usar o mesmo module export de cadastrando jogo.
Alterar o res.redirect
*/

module.exports.uploadImg = (req,res) => {
    res.send(204)
}

