const arrayDeJogos = require('../model/jogos.json')

/*
Chamando o json de Jogos
*/

module.exports.home = function(req, res) {
  res.render('home');
}

module.exports.quem = function(req, res) {
    res.render('quem-somos',{jogos:arrayDeJogos});
  }
/*
Enviando para a página dentro da var jogos o array de jogos
*/

module.exports.perguntas = function(req, res) {
    res.render('perguntasFrequentes');
  }

module.exports.politica = function(req, res) {
    res.render('politicaDePrivacidade');
  }

  /*Alterando a função da página produto*/
module.exports.produto = function(req, res) {
    const exibindoJogo = selecionarJogo (arrayDeJogos, req.params.id)
    res.render('detalhesDoProduto');
  }

  