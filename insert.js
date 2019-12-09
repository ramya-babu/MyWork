var mysql = require('mysql');

var connection = mysql.createConnection({
	host:'localhost',
	user:'ramya1',
	password:'12345',
	database:'anagramDB'});

//var connectionString = 'mysql://ramya:1234@localhost/anagramDB?charset=utf8_general_ci&timezone=-0700'; 

connection.connect();


var test = {
userId : 'Id12343',
stringGenerated	: 'abcd',
totalmarks : 5,
userAnagram: 'dont know how to store'
};



var query = connection.query('insert into anagramdetails set ?',test, function (err, result)
{
    if (err) {
	console.error(err);
	return;
    }   
    console.error(result);
});


