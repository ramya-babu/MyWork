 var resultArray = [];

//generate the random letters
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));


//testing.

const JSONTest = {"anagrams": ["snail", "sailn"]}

console.log(JSONTest.anagrams[0]);
console.log(JSONTest.anagrams[1]);
console.log(text);


//make a call to the API

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
const url='http://www.anagramica.com/best/:'+ text;
xhr.onreadystatechange = function() {
    {
           
	if (this.readyState == 4 && this.status == 200) 
        {
            var obj = this.responseText;
	    var obj1 = JSON.parse(obj);
	    console.log (obj);
	    console.log (obj1.best[0]);
	    console.log (obj1.best.length);
        }//if
    }
}

xhr.open("GET", url, true);
xhr.send();
