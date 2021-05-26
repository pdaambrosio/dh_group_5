module.exports.home = function(req, res) {
  res.render('home');
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