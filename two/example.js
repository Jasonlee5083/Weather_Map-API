// In app.js

var express = require("express");  
var bodyparser = require("body-parser");
var app = express();

var port =3000;
app.use(bodyParser.jaon());

var dogs =[];

app.get('/dog', function (req, res) {  
    res.send(dogs);
});

app.post('/dog',function (req,res){
	console.log(req.body);
	dogs.push(req.body.dog);
	res.send('Your dog ${req.boy.dog} has been added');
})



app.listen(port, function () {  
    console.log("App is listening on port " + port);
});





