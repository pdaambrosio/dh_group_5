const { encriptarSenha } = require('../helpers/encriptarSenha');
const { atualizarDadosPessoais } = require('../helpers/atualizarDadosPessoais');
const { buscarDadosPessoaisId } = require('../helpers/buscarDadosPessoais');

module.exports.dadosPessoais = async (req, res) => {
    const dadosUsuario = await buscarDadosPessoaisId(req.session.usuario);
    res.render('dadosPessoais', {
        dadosUsuario,
        usuarioLogado: req.session.nickname,
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
            usuarioLogado: req.session.nickname,
            mensagem: 'As senhas não são iguais. Tente novamente.'
        }); return
    };

    try {
        await atualizarDadosPessoais(
            {
                nome: usuario.nome,
                sobrenome: usuario.sobrenome,
                email: usuario.email,
                nickname: usuario.nickname,
                cidade: usuario.cidade,
                estado: usuario.estado,
                facebook: usuario.facebook,
                instagram: usuario.instagram,
                twitter: usuario.twitter,
                senha: encriptar
            },
            req.session.usuario
        );
        const dadosUsuario = await buscarDadosPessoaisId(req.session.usuario);
        req.session.nickname = dadosUsuario[0].nickname;
        console.log(dadosUsuario);
        return res.render('dadosPessoais', {
            dadosUsuario,
            usuarioLogado: req.session.nickname,
            mensagem: 'Informações atualizadas com sucesso.'
        });
    } catch (err) {
        if (err.name === 'SequelizeValidationError') {
            return res.render('dadosPessoais', {
                dadosUsuario,
                usuarioLogado: req.session.nickname,
                mensagem: err.errors.map(e => e.message)
            });
        }
    }
}