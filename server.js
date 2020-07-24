var express = require('express')
var app = express()
const port = 3000
var product_router = require('./routes/product.router');

//Link to static file
app.use(express.static("public"));
app.listen(port)
//Set pug view engine
app.set('view engine', 'pug');
app.set('views','./views');
app.use('/product',product_router)
app.get('/',function(req,res){
    res.render('home')
})