var mysql = require('mysql');

var connection = mysql.createConnection({
	host:'localhost',
	user:'ramya1',
	password:'12345',
	database:'anagramDB'});

//var connectionString = 'mysql://ramya:1234@localhost/anagramDB?charset=utf8_general_ci&timezone=-0700'; 

connection.connect();

connection.query('select * from anagramdetails where userid="Id12343"', function( err, result){
  console.log(result);
})
