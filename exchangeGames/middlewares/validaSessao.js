module.exports = function (req, res, next) {
    if (req.session.usuarioEmail) {
        next();
    } else {
        res.redirect('/users/login');
    }
};