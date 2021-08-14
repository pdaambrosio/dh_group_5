module.exports = function (req, res, next) {
    if (req.session.usuario) {
        next();
    } else {
        res.redirect('/users/login');
    }
};