"use strict";

var express = require('express');

var admin_router = express.Router();

var admin_controller = require('../controllers/admin.controller');

admin_router.get('/', admin_controller.show);
admin_router.post('/add_product', admin_controller.addProduct);
module.exports = admin_router;