'use strict';

module.exports.postFunc = (event, context, callback) => {
  
  
      // This will allow us to freeze open connections to a database
     // context.callbackWaitsForEmptyEventLoop = false;

       let json = JSON.parse(event.body);
           
         let userId = json.userId;
         let generatedString = json.generatedString;
         let userAnagram = json.anagrams;

    
       //return response
       return callback(null,  {
                statusCode: 200,
                body: JSON.stringify(
                  {
                       
                      message: "Thanks for your submission! Checking your answers with anagram and publishing results will be released in the furture.",                 
                       User_Id: userId,
                      generated_String: generatedString,
                      UserAnagramSub: userAnagram
 
                  }),
         })


}; //main event

