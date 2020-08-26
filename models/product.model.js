var mongoose = require('mongoose')
var productSchema = new mongoose.Schema({
    productname: String,
    avatar: String,
    price: Number,
    inStock: Number,
    type:String,
    brand: String
})
module.exports = mongoose.model('User',productSchema)