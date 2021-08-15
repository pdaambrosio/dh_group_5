module.exports.favoritos = (req, res) => {
      res.render('favoritos', {
            usuarioLogado: req.session.nickname
      });
} 
