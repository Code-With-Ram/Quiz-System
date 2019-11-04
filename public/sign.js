window.alert('ssss');
global var db = require('/home/user/quiz/public/js/connect');


 var sql = "INSERT INTO Registration (id,name,password,email) VALUES (4,'Company Inc','password','sam@gmail.com')";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

db.end();
