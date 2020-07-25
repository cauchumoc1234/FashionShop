const express = require('express')
const product_router = express.Router()
const product_controller = require('../controllers/product.controller')
product_router.get('/',product_controller.show)
product_router.get('/category',product_controller.show)
module.exports = product_router;