const express = require('express')
const product_route = express.Router()
product_route.get('/',(req,res)=>{
    res.render('product')
})
product_route.get('/say',(req,res)=>{
    res.render('home')
})
product_route.get('/category',(req,res)=>{
    res.render('product')
})
module.exports = product_route;