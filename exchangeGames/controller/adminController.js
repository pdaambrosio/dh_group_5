const fs = require('fs');
let arrayUsersAdmin = require('../model/usersAdmin.json')
const bcrypt = require('bcrypt')
const db = require('../models')
const {Op} = require('sequelize')


function salvandoUserAdmin(arrayUsersAdmin) {
    fs.writeFileSync(
      './model/usersAdmin.json',
      JSON.stringify(arrayUsersAdmin)
    );
}

function criptografarSenha(senha){
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(senha, salt)
}

function verificarSenha(senha, hash){
    return bcrypt.compareSync(senha,hash)
}

module.exports.login = function(req, res) {
    res.render('login-admin', {
      usuarioLogado: req.session.nickname
    });
  }


  module.exports.painel = function(req, res) {
    res.render('painel-admin', {
      usuarioLogado: req.session.nickname
    });
  }

  module.exports.cadastrandoUserAdmin = (req, res) => {
    const novoUser = {
        id: ++arrayUsersAdmin[0],
        ...req.body
    }
    novoUser.senha = criptografarSenha(novoUser.senha)
    arrayUsersAdmin[0] = novoUser.id
    arrayUsersAdmin.push(novoUser)    
    salvandoUserAdmin(arrayUsersAdmin)
    res.redirect('/admin/painel', {
      usuarioLogado: req.session.nickname
    })
  }

  module.exports.logando = function(req, res) {
    const userLogando = {
        ...req.body
    }
    const userSelecionado = arrayUsersAdmin.filter((arrayUsersAdmin) => {return arrayUsersAdmin.email === userLogando.email})
    if(!!userSelecionado[0] && verificarSenha(userLogando.senha, userSelecionado[0].senha))
    {
        req.session.adminAutenticado = true,
        req.session.userAdminId = userSelecionado[0].id
        res.redirect('/admin/painel', {
          usuarioLogado: req.session.nickname
        });
    }
    else{
        res.render('login-admin', {
          usuarioLogado: req.session.nickname
        });
    }
    
  }


  /*Testes*/

  module.exports.cadastroGenero = function(req, res) {
    res.render('testeCadastroGenero', {
      usuarioLogado: req.session.nickname
    });
  }

  module.exports.cadastrandoGenero = async function (req, res) {
    await db.Genero.create({
      nome: req.body.genero
    })
    res.redirect('/admin/cadastroGenero', {
      usuarioLogado: req.session.nickname
    });
  }

  module.exports.cadastroPlataforma = function(req, res) {
    res.render('testeCadastroPlataforma', {
      usuarioLogado: req.session.nickname
    });
  }

  module.exports.cadastrandoPlataforma = async function (req, res) {
    await db.Plataforma.create({
      console: req.body.console,
      marca: req.body.marca
    })
    res.redirect('/admin/cadastroPlataforma', {
      usuarioLogado: req.session.nickname
    });
  } 