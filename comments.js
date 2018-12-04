var mongoose = require('mongoose');
mongoose.connect('mongodb://ceeyesharish:cs2712@ds161901.mlab.com:61901/foodie');

var schema = mongoose.Schema({
  hotelName : {type:String, require: true},
  text: {type:String, required:true}
});


var comment = mongoose.model('comment',schema,'comment');

module.exports = comment;