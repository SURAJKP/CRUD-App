var mongoose = require('mongoose');
 
var imagePath = mongoose.Schema({
	path: {
	type: String,
	required: true,
	trim: true
	},
	originalname: {
	type: String,
	required: true
	}
 
});
module.exports = mongoose.model('Image', imagePath);