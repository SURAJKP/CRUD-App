var Images=require('./models/imageModel.js');
var multer = require('multer');
var bodyParser = require("body-parser")
var fs = require("fs");



var storage = multer.diskStorage({
 destination: function(req, file, cb) {
 cb(null, 'public/uploads/')
 },
 filename: function(req, file, cb) {
 cb(null, file.originalname);
 
 }
});
 
var upload = multer({
 storage: storage
});

module.exports=function(app){
	
	app.post('/',upload.any(),function(req,res,next){
		var path = req.files[0].path;
 		var imageName = req.files[0].originalname;
 		console.log(path);
 		Images.create({path:path,originalname:imageName},function(err,images){
 			if(err)
 				res.send(err)
 			//res.json(images);
 		})
	});

	
	app.get('/pic',function(req,res){
		Images.find(function(err,files){
			if (err) {
				throw err;
			}
			res.json(files);
			console.log(files);
		});
	});
	app.get('*',function(req,res){
        newFunction(res);
	})
}
    function newFunction(res) {
    res.sendfile('./public/views/index.html');
}
