const { encriptarSenha } = require('../helpers/encriptarSenha');
const { cadastrarUsuario } = require('../helpers/cadastrarUsuario');
const { atualizarUsuario } = require('../helpers/cadastrarUsuario');
const { buscarDadosPessoais } = require('../helpers/buscarDadosPessoais');

module.exports.dadosPessoais = async (req, res) => {
    const dadosUsuario = await buscarDadosPessoais(req.session.usuarioEmail);
    res.render('dadosPessoais', {
        dadosUsuario,
        mensagem: null
    });
}

module.exports.salvarDadosPessoais = async (req, res) => {
     const usuario = req.body;
     const encriptar = await encriptarSenha(usuario.senha);
     const dadosUsuario = await buscarDadosPessoais(req.session.usuarioEmail);

     if (usuario.senha != usuario.confirmaSenha) {
        res.render('dadosPessoais', {
            dadosUsuario,
            mensagem: 'As senhas não são iguais. Tente novamente.'
        }); return
    };

    try {
        await atualizarUsuario(req.session.usuarioEmail);
        await cadastrarUsuario({
            nome: usuario.nome,
            sobrenome: usuario.sobrenome,
            email: usuario.email,
            nickname: usuario.nickname,
            senha: encriptar,
            notificacao_site: 0,
            notificacao_parceiros: 0,
            usuario_bloqueado: 0,
            role: 'USER',
            lista_favoritos_id: 10,
            avatar: 'foto'
        });
        return res.render('dadosPessoais', {
            dadosUsuario,
            mensagem: null
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