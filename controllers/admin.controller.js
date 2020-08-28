module.exports.show = function(req, res) {
    res.render('admin/admin')
}
module.exports.addProduct = function(req, res) {
    res.send(req.body)
}