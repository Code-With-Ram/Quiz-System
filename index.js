var express = require("express");
var app = express();
app.use(express.static(__dirname + '/public'));
var path = require("path");
app.use(express.urlencoded())
//var bodyParser=require("body-parser"); 
//var urlencodedParser = bodyParser.urlencoded({ extended: false });
var db = require('/home/user/quiz/public/js/connect');




app.get('/',function(req,res){
res.sendFile(path.join(__dirname+'/public/Home.html'));
});



app.post('/sign', function(req, res) {
var sql = "INSERT INTO Registration (id,name,password,email) VALUES (127,'Company Inc','password','sam@gmail.com')";
db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
	//res.write('<script>alert("data inserted")</script>');
	res.sendFile(path.join(__dirname+'/public/Home.html'));

});
app.listen(3002);
