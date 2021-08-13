const arrayDeJogos = require('../model/jogos.json');

/*
Chamando o json de Jogos
*/

module.exports.home = function(req, res) {
  res.render('home', {
    usuarioLogado: req.session.nickname
  });
}

module.exports.sair = function(req, res) {
  req.session.destroy(); 
  res.render('home', {
    usuarioLogado: null
  });
}

module.exports.quem = function(req, res) {
    res.render('quem-somos', {
      usuarioLogado: req.session.nickname,
      jogos:arrayDeJogos
    });
  }
/*
Enviando para a página dentro da var jogos o array de jogos
*/

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

  /*Alterando a função da página produto*/
module.exports.produto = function(req, res) {
    //const exibindoJogo = selecionarJogo (arrayDeJogos, req.params.id)
    res.render('detalhesDoProduto');
  }

  