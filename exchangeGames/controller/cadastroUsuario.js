const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

let cadastroJson = path.join('modules/usuarios.json');

function registrar (usuario) {
    const gravar = JSON.stringify(usuario);
    fs.writeFileSync(cadastroJson, gravar);
};

function lerRegistro () {
    const ler = fs.readFileSync(cadastroJson);
    const dados = JSON.parse(ler);
    return dados
};

function buscarRegistro (email) {
    const usuarios = lerRegistro();
    return usuarios.find(usuario => usuario.email === email);
}

async function encriptarSenha(senha) {
    const salt = await bcrypt.genSalt(5)
    return await bcrypt.hash(senha, salt)
};

module.exports.cadastro = (req, res) => {
    res.render('cadastroUsuario', {
        mensagem: ''
    });
};

module.exports.registrarUsuario = async (req, res) => {
    const usuario = req.body;

    if (buscarRegistro(usuario.email)) {
        res.render('cadastroUsuario', {
            mensagem: 'Usuário já cadastrado.'
        });
    } else {
        const hash = await encriptarSenha(usuario.senha);
        const usuarios = lerRegistro();
        usuarios.push({
            nome: usuario.nome,
            sobrenome: usuario.sobrenome,
            nome_usuario: usuario.nome_usuario,
            email: usuario.email,
            hash
        });
        registrar(usuarios);
    }

    res.redirect('/admin/login');
};