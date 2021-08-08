module.exports = function (req, res, next) {
    if (!req.session.emailUsuario) {
        res.redirect('/users/login');
    }
    next();
};