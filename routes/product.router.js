const express = require('express')
const product_router = express.Router()
const product_controller = require('../controllers/product.controller')
product_router.get('/',product_controller.show)
product_router.get('/category',product_controller.show)
product_router.get('/shoe/:id',product_controller.showShoe)
product_router.get('/clothing/:id',product_controller.showClothing)
module.exports = product_router;