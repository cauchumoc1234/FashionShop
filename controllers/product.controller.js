var Shoe = require('../models/product.model')
module.exports.findShoe = async function(id){
    return await Shoe.findOne({productname:id});
}
module.exports.show = function(req, res) {
    res.render('product')
}