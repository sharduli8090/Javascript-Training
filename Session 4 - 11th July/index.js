// Scopes

//  Global Scope

// let globalVAr = 10;

// function globalFunction(){
//     console.log("I am Global "+globalVAr);
// }

// globalFunction();


// Local scope

// function outerFunc(){

//     let outerVar = 20;

//     function innerFunc(){
//         let innerVar = 30;
//         console.log(outerVar);
//         console.log(innerVar);
//     }

//     innerFunc();
//     console.log(outerVar);
//     // console.log(innerVar);
// }
// outerFunc()


// - lexial scoping
//  accessibility and visibility is defined by physical placement in source code








// High Order Functions

// Function as arguments

// function highOrderFunc(callback){
//     callback();
// }

// function sayHello(){
//     console.log("Hello");
// }

// highOrderFunc(sayHello);




// function as return value

// function highOrderFunc(multiplier){
//     return function(number){
//         return number*multiplier;
//     };
// }
 
// const doubleFunc = highOrderFunc(2);
// console.log(doubleFunc(5));


// Asynchronous Behaviour in Javascript
//  - callbacks

// console.log("Before");

// setTimeout(function(){
//     console.log("After");
// },2000);

// console.log("End");


// - promises

// console.log("Before");

// fetch("https://api.example.com/data")
// .then(
//     function(response){
//         return response.json();
//     }
// ).then(
//     function(data){
//         console.log(data);
//     }
// )
// .catch(function(error){
//     console.log(error);
// })

// console.log("End");



// -async await

// async await

// async function getData(){
//     try {
//         console.log("Before");
//         const response = await fetch("https://api.example.com/data");
//         const data = await response.json();
//         console.log(data);
//         console.log("End");
        
//     } catch (error) {
//         console.log(error);
//     }
// }
// getData()




// Error Handling

// - try catch blocks

// try{
// const result = 10/0;
// console.log(result);
// }catch(error){
// console.log("An error Found"+error);
// }

// throwing exceptions
// function check(num){
//     if(typeof num !== "number"){
//         throw new Error("Invalid Number");
//     }
//     console.log(num);
// }

// try{
//     check("5");
// }catch(er){
//     console.log("An error occured "+er);
// }