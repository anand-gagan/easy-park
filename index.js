var express = require('express');
var app = express();

// var db = require('./db')(app);

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

mongoose.connect('mongodb://gagan:gagan123@ds049180.mlab.com:49180/pas');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    console.log("Connected To MLab Cloud Database...");
});

app.use(express.static(__dirname + '/public'));

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var SlotSchema = mongoose.Schema({
	slotId: String,
	slotStatus: {
		type: String,
		default: 'red'
	}
});

var Slot = mongoose.model('Slot', SlotSchema);

app.get('/',function(req, res){
	res.render('PAShome');
});
app.post('/checkbooked',function(req, res){
	//var k = req.body.key;
    Slot.find({},function (err, success) {
        if(success.length>0)
          res.send(success);
        else
          res.send('unavailable');
        if (err) 
        	return console.error(err);
    });
});
app.post('/change-status',function(req, res){
	var k = req.body.ide;
	console.log("asdfghjhfdsdgh document deleted");
	var myquery = { slotId : k };
	Slot.deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    else
    	res.send(obj);
    console.log("1 document deleted");
  });
});
app.post('/admin-page',function(req, res){
	 if(req.body.nam == "admin" && req.body.pass == "admin123")
	console.log('logged in successfulluy');
		res.render('dashboard');
});
app.post('/book-slot', function(req, res) {
		console.log("Here is request");
		var id = req.body.ide;
		console.log(id);
		var newSlot = new Slot({
			slotId: id,
			slotStatus: 'red'
		});
		newSlot.save(function(err, data) {
			if(err)
				throw err;
			else if(data) {
				console.log('slot ' + id + ' booked');
				res.send(data);
			}
		});
	});
	// app.get('/admin', function(req, res) {
	// 	res.render('dashboard');
	// });

app.get('/*',function(req, res){
	res.send("404");
});

app.listen(process.env.PORT || 3000,function(){
	console.log('Server is up and running');
});