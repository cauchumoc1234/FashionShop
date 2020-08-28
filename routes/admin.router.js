const express = require('express')
const admin_router = express.Router()
const admin_controller = require('../controllers/admin.controller')
admin_router.get('/', admin_controller.show)
admin_router.post('/add_product', admin_controller.addProduct)
module.exports = admin_router;