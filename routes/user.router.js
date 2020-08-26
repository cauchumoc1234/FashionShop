const express = require('express')
const user_router = express.Router()
const user_controller = require('../controllers/user.controller')
user_router.get('/',user_controller.show)
user_router.get('/create',user_controller.create)
user_router.post('/create',user_controller.postCreate)
user_router.get('/login',user_controller.login)
user_router.post('/login',user_controller.postLogin)
module.exports = user_router;