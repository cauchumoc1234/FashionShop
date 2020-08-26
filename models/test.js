var mongoose = require('mongoose')
mongoose.connect("mongodb+srv://cauchumoc1234:cauchumoc123....@cluster0.kh9wa.gcp.mongodb.net/xagent?retryWrites=true&w=majority")
var db = mongoose.connection;
//Ràng buộc kết nối với sự kiện lỗi (để lấy ra thông báo khi có lỗi)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var userSchema = mongoose.Schema({
    name: String
})
var productSchema = mongoose.Schema({
    name: String
})
var user = mongoose.model('User',userSchema)
var pr = mongoose.model('Product',productSchema)
// var man = new user({name:"Thu Phuong"});
// man.save(function (err) {
//     if (err) return handleError(err);
//     // saved!
//   })
// console.log(db.find());
var lap = new pr({name:'Dell 5577'});
lap.save(function (err) {
    if (err) return handleError(err);
    // saved!
  })