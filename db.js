var mongoose = require('mongoose');
mongoose.connect('mongodb://ceeyesharish:cs2712@ds161901.mlab.com:61901/foodie');

var schema = mongoose.Schema({
  name: {type:String, required:true},
  type: {type:String, required:true},
  city: {type:String, required:true},
  rating: {type:String, required:true},
});


var res = mongoose.model('res',schema,'restaurent');

module.exports = res;