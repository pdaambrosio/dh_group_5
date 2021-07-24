const { cadastrar } = require('../helpers/cadastrar');
const { lerCadastro } = require('../helpers/lerCadastro');
const { encriptarSenha } = require('../helpers/hash');
const { buscarCadastro } = require('../helpers/buscarCadastro');
const models = require('../models');

// module.exports.cadastrar = async function () {
//     await models.Usuarios.create({
//         nome
//     })
// };

async function casdatro() {
    await models.usuarios.create({
        nome: 'Paulo Daniel',
        sobrenome: 'Ambrosio',
        email: 'pda.ambrosio@gmail.com',
        nickname: 'pdajgs',
        senha: 'adasdas1234',
        notificacao_site: 0,
        notificacao_parceiros: 0,
        usuario_bloqueado: 0,
        role: 'USER',
        lista_favoritos_id: 10,
        avatar: 'foto'
    })
};

casdatro()