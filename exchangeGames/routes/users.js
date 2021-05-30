const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const usersController = require('../controller/usersController')

router.get('/suaConta', usersController.suaConta);

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', async (req, res) => {
  const login = req.body
  const usuarios = usersController.buscarCadastro(login.email)

  if (!usuarios) {
    res.send(404)
  } else {
    if (await validarSenha(login.senha, usuarios.hash)) {
      res.redirect('/users/suaConta')
    } else {
      res.send(400)
    }
  }
})

async function validarSenha(senha, hash) {
  return await bcrypt.compare(senha, hash)
}


module.exports = router;
