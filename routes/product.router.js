const express = require('express')
const product_route = express.Router()
const product_controller = require('../controllers/product.controller')
product_route.get('/',product_controller.show)
product_route.get('/category',product_controller.show)
module.exports = product_route;