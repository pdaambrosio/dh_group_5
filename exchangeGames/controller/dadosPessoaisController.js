const { encriptarSenha } = require('../helpers/encriptarSenha');
const { atualizarUsuario } = require('../helpers/cadastrarUsuario');
const { buscarDadosPessoaisId } = require('../helpers/buscarDadosPessoais');

module.exports.dadosPessoais = async (req, res) => {
    const dadosUsuario = await buscarDadosPessoaisId(req.session.usuario);
    res.render('dadosPessoais', {
        dadosUsuario,
        mensagem: null
    });
}

module.exports.salvarDadosPessoais = async (req, res) => {
     const usuario = req.body;
     const encriptar = await encriptarSenha(usuario.senha);
     const dadosUsuario = await buscarDadosPessoaisId(req.session.usuario);

     if (usuario.senha != usuario.confirmaSenha) {
        res.render('dadosPessoais', {
            dadosUsuario,
            mensagem: 'As senhas não são iguais. Tente novamente.'
        }); return
    };

    try {
        await atualizarUsuario(
            {
                nome: usuario.nome,
                sobrenome: usuario.sobrenome,
                email: usuario.email,
                senha: encriptar
            },
            req.session.usuario
        );
        const dadosUsuario = await buscarDadosPessoaisId(req.session.usuario);
        req.session.save(function () {
            req.session.usuario = dadosUsuario.email;

            return res.render('dadosPessoais', {
                dadosUsuario,
                mensagem: 'Informações atualizadas com sucesso.'
            });
        });
    } catch (err) {
        if (err.name === 'SequelizeValidationError') {
            return res.render('dadosPessoais', {
                dadosUsuario,
                mensagem: err.errors.map(e => e.message)
            });
        }
    }
}