const { cadastrarUsuario } = require('../helpers/cadastrarUsuario');
const { buscarUsuarioEmail } = require('../helpers/buscarUsuarioEmail');
const { encriptarSenha } = require('../helpers/encriptarSenha');
const { buscarUsuarioNickname } = require('../helpers/buscarUsuarioNickname');

module.exports.cadastro = (req, res) => {
    res.render('cadastroUsuario', {
        mensagem: '',
        alerta: '',
        usuario: ''
    });
};

module.exports.registrarUsuario = async (req, res) => {
    const usuario = req.body;
    const consultarEmail = await buscarUsuarioEmail(usuario.email);
    const consultarNickname = await buscarUsuarioNickname(usuario.nickname);

    if (usuario.senha != usuario.confirma_senha) {
        res.render('cadastroUsuario', {
            alerta: 'As senhas não são iguais. Tente novamente.',
            mensagem: '',
            usuario: usuario
        }); return
    };
    
    if (consultarEmail) {
        res.render('cadastroUsuario', {
            mensagem: 'Usuário já cadastrado.',
            alerta: '',
            usuario: usuario
        }); return
    } else if (consultarNickname) {
        res.render('cadastroUsuario', {
            mensagem: 'O Nickname já existe, tente outro.',
            alerta: '',
            usuario: usuario
        }); return
    }
    
    try {
        const encriptar = await encriptarSenha(usuario.senha);
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
        return res.redirect('/users/login');
    } catch (err) {
        if (err.name === 'SequelizeValidationError') {
            return res.render('cadastroUsuario', {
                mensagem: err.errors.map(e => e.message),
                alerta: '',
                usuario: usuario
            });
        }
    }
};