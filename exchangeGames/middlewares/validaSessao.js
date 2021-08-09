module.exports = function (req, res, next) {
    if (req.session.emailUsuario) {
        next();
    } else {
        res.redirect('/users/login');
    };
};