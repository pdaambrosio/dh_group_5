module.exports = function (req, res, next) {
    if (req.session.usuarioNickname) {
        next();
    } else {
        res.redirect('/users/login');
    };
};