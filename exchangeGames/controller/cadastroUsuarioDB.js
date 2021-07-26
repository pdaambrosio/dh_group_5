const { cadastrarUsuarioBD } = require('../helpers/cadastrarUsuarioBD');
const { buscarUsuarioEmail } = require('../helpers/buscarUsuarioEmail');
const { encriptarSenha } = require('../helpers/hash');
const { buscarUsuarioNickname } = require('../helpers/buscarUsuarioNickname');
const models = require('../models');

module.exports.cadastro = (req, res) => {
    res.render('cadastroUsuario', {
        mensagem: '',
        alerta: '',
        usuario: ''
    });
};

module.exports.registrarUsuario = async (req, res) => {
    const usuario = req.body;


    if (usuario.senha != usuario.confirma_senha) {
        res.render('cadastroUsuario', {
            alerta: 'As senhas não são iguais. Tente novamente.',
            mensagem: '',
            usuario: usuario
        }); return
    };
    
    if (await buscarUsuarioEmail(usuario.email)) {
        res.render('cadastroUsuario', {
            mensagem: 'Usuário já cadastrado.',
            alerta: '',
            usuario: usuario
        }); return
    }
    if (await buscarUsuarioNickname(usuario.nickname)) {
        res.render('cadastroUsuario', {
            mensagem: 'O Nickname já existe, tente outro.',
            alerta: '',
            usuario: usuario
        }); return
    }
    else {
        const hash = await encriptarSenha(usuario.senha);
        cadastrarUsuarioBD({
            nome: usuario.nome,
            sobrenome: usuario.sobrenome,
            email: usuario.email,
            nickname: usuario.nickname,
            senha: hash,
            notificacao_site: 0,
            notificacao_parceiros: 0,
            usuario_bloqueado: 0,
            role: 'USER',
            lista_favoritos_id: 10,
            avatar: 'foto'
        });
    }
    res.redirect('/users/login');
};