const express = require('express')
const user_router = express.Router()
const user_controller = require('../controllers/user.controller')
user_router.get('/',user_controller.show)
user_router.get('/create',user_controller.create)
module.exports = user_router;