'use strict';


module.exports.getString = (event, context, callback) => {
  
   
         var text = "";
         var possible = "abcdefghijklmnopqrstuvwxyz";
         var i;

        for (i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
     

        const response = {
                statusCode: 200,
                body: JSON.stringify(
                  {
                    generatedString: text
                    //input: event,
                  }
               ),
        };

callback(null, response);

}; //main event


