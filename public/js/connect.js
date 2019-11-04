var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "user",
  database: "quiz"
});

conn.connect(function(err) {
  if (err) 
  	throw err;
  console.log('connects');
});
module.exports = conn;

