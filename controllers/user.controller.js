var User = require('../models/user.model')

module.exports.show = function(req, res) {
    // res.render('user/user_login')
    res.send("user")
}
module.exports.create = function(req, res) {
    res.render('user/user_create')
}
module.exports.postCreate = function(req, res) {
    User.create({
        username: req.body.username,
        password: req.body.password,
        fullname: req.body.fullname,
        address: req.body.addess,
        phone: req.body.phone,
    }, function(err) {
        if (err) return handleError(err);
        // lưu!
    })
    res.redirect('/')
}
module.exports.login = function(req, res) {
    res.render('user/user_login')
}
module.exports.postLogin = function(req, res) {
    User.find({ 'username': req.body.username, 'password': req.body.password }, 'username password', function(err, users) {
        if (err) return handleError(err);
        res.cookie('id', users[0]._id, { signed: true })
        res.redirect('/')
    })
}
module.exports.showProfile = function(req, res) {
    res.send('profile')
}
module.exports.logout = function(req, res) {
    res.clearCookie('id');
    res.redirect('/')
}