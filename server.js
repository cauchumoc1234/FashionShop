require('dotenv').config()
var express = require('express')
var app = express()
const port = 3000
//Link to static file
app.use(express.static("public"));
var bodyParser = require('body-parser');
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
var db = require('./db')
var product_router = require('./routes/product.router');
var user_router = require('./routes/user.router')

app.listen(port)
//Set pug view engine
app.set('view engine', 'pug');
app.set('views','./views');
app.use('/product',product_router)
app.get('/',function(req,res){
    res.render('home')
})
app.use('/user',user_router)