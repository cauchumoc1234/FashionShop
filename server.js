var express = require('express')
var app = express()
const port = 3000
//Link to static file
app.use(express.static("public"));
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