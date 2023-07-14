// ES6 - ECMAScript 2015

// Arrow Functions

// Traditional Method
// const multiply = function(a,b){
//     return a*b;
// }

// // Arrow Function
// const multiplys = (a,b) => a*b;


// Classes 
// class Rectangle{
//     constructor(width,height){
//         this.width=width;
//         this.height=height;
//     }
//     getArea(){
//         return this.width*this.height;
//     }

// }

// const rect = new Rectangle(5,3);
// console.log(rect.getArea());


// Modules
// import {add} from './index1.js';
// console.log(add(2,3));

// Destructuring Assignment 

// Array Destructuring
// const array = [1,2,3,4,5];
// const [first,second,hello,i,...rest] = array;
// console.log(first, second,hello);
// console.log(rest);
// console.log(i);

// Object Destructuring
// const person = {name:"John",age:20};
// const {name , age} = person;
// console.log(name,age);

// template Literals
//  Backticks (`)

// const name = "John";
// const age = 22;
// console.log(`My name is ${name} and I am ${age} years old`);

//  Spread and Rest Operators
//   ...

// Spread Operator - bundle to individual
// const arr1 = [1,2,3,4];
// const arr2 = [...arr1,5,6];
// console.log(arr2);

// Rest Operator - individual to bundle
// function sum(...numbers){
//     return numbers.reduce((a,b)=>a+b);
// }
// console.log(sum(5,10,20,30));

// Promises
// Async Await - ES8 2017

// function asyncOp(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Async Completed");
//         },2000);
//     })
// }

// async function doAsyncTask()
// {
// try{
// const res = await asyncOp();
// console.log(res);
// }catch(e){
//     console.error(e);
// }
// }

// doAsyncTask();

