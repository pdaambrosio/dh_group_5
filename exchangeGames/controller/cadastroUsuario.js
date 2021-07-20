const { cadastrar } = require('../helpers/cadastrar');
const { lerCadastro } = require('../helpers/lerCadastro');
const { encriptarSenha } = require('../helpers/hash');
const { buscarCadastro } = require('../helpers/buscarCadastro');

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
        });
    };

    if (buscarCadastro(usuario.email)) {
        res.render('cadastroUsuario', {
            mensagem: 'Usuário já cadastrado.',
            alerta: '',
            usuario: usuario
        });
    } else {
        const hash = await encriptarSenha(usuario.senha);
        const usuarios = lerCadastro();
        usuarios.push({
            nome: usuario.nome,
            sobrenome: usuario.sobrenome,
            nome_usuario: usuario.nome_usuario,
            email: usuario.email,
            hash
        });
        cadastrar(usuarios);
    }

    res.redirect('/users/login');
};