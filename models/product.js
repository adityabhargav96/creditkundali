var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 var ProductSchema = new Schema({
   id_new:Number,
   title:String,
   form:String,
//   drivinglicense:Stri0ng,
});
//
 module.exports = mongoose.model('Product', ProductSchema);
