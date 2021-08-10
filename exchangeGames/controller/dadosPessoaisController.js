const { buscarDadosPessoais } = require('../helpers/buscarDadosPessoais');

module.exports.dadosPessoais = async (req, res) => {
    const dadosPessoais = await buscarDadosPessoais(req.session.usuarioEmail);
    res.render('dadosPessoais', {dadosPessoais});
}

module.exports.salvarDadosPessoais = (req, res) => {
     console.log(req.body);
}