// JSON - key value

// Syntax
// {
// "name":"John",
// "age":30,
// "city":"New York"    
// }


// - Data Types Supported by JSON format
// Strings = "Hello World"
// Numbers = Integer
// Boolean = true or false
// Arrays = []
// Objects = {name:"Doe"}

// {
//     "name":"John",
//     "age":30,
//     "isStudent":false,
//     "hobbies":["reading","cooking"],
//     "address":{
//         "street":"123 Main street",
//         "city":"Chennai"
//     }
// }

// {
//     "address":{
//         "street":"xyz",
//         "location":{
//             "city":"Chennai",
//             "state":"Tamil Nadu"
//         }
//     }
// }


//  Parsing JSON 
//  to convert JSON string to Javascript Object
// JSON.parse();
// const jsonString = '{"name":"John","age":30}';

// const jsonObject = JSON.parse(jsonString);

// console.log(jsonObject.name);


// Stringifying JSON
// JSON.stringify()

// const obj = {
//     name:"John",age:30
// }
// const jsonString = JSON.stringify(obj);

// console.log(jsonString);

// API Requests

// GET - data fetch from sever 
// POST - data sent to server
// PUT - data updation
// DELETE - delete data from server




// AJAX 
// Asynchronous JavaScript and XML

// XMLHttpRequest

// Create an XMLHttpRequest
// const xhr = new XMLHttpRequest();

// //  Configuring the request
// xhr.open('GET',"https://api.example.com/data");

// // Set a callback function to handle the response
// xhr.onload = function(){
//     if(xhr.status==200){
//         const responseData = JSON.parse(xhr.responseText);
//         console.log(responseData);
//     }else{
//         // Handle Errors
//         console.error("Request Failed : Status: ",xhr.status);
//     }
// }

// xhr.send();



