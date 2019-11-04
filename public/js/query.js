    var db = require('connect');
    db.query("SELECT * FROM record", function (err, result, fields) {
    if (err) throw err;
    console.log(result[1].name);
	  });

    db.query("SELECT * FROM record", function (err, result, fields) {
    if (err) throw err;
    console.log(result[1].name);
	  });
	