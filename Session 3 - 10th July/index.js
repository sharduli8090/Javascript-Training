// //  Functions

// //  Function Declaration
// function myFunc(){
//     console.log("Hello");
// }

// // Function Expression
// const myVar = function(){
//     console.log("Function Expression");
// }

// // Arrow Function
// const arrowFunc = (name) => {
//     console.log("Hello "+name);
// }

// // Immediately Invoked Function
// (function(){
// console.log("IIF");
// })();

// // Generator Function - can be paused and resumed
// function* myFunc(){
//     yield 1;
// }



//  Arrays
// let arr = ["apple","mango","banana"];
// let arrMixed = [true,54,"Hello",{name:"John"}];

// arr[1] = "hello";

// console.log(arr[1]);

// console.log(arr.length);


// let arr = [];
// // push - adds to last index
// arr.push(22);
// arr.push(23);
// arr.push(24);
// arr.push(25);
// arr.push(26);
// arr.push(27);

// pop - removes last element
// arr.pop();

// console.log(arr);

// shift - removes element from the first index
// arr.shift();

// unshift - adds to first index
// arr.unshift(true);

// concat
// let arr2 = ["hello","world"];
// let result = arr.concat(arr2);

// slice
// let result = arr.slice(1,5);  // initial , final-1

// indexOf
// console.log(arr.indexOf(24));
// console.log(arr.indexOf(54));

// includes
// console.log(arr.includes(25));
// console.log(arr.includes(250));


// LOOPS

// forEach
// arr.forEach(item => {
//  console.log(item);
// })

// for loop
// while loop

// map
// arr.map(item=>{
//     console.log(item);
// })

// filter
// let result = arr.filter(item=>item%2==0);
// console.log(result);

// reduce
// let result = arr.reduce((a,c)=>a+c);
// console.log(result);



// OBJECTS
// - declaration
// let myObj = {
//     name:"John Doe",
//     age:55,
//     city:"Chennai"
// };

// access
// console.log(myObj.name);
// console.log(myObj["name"]);

// modification
// myObj.name = "updated";
// myObj["name"] = "updated";
// console.log(myObj.name);

// adding a new Key
// myObj.gender = "Male";
// myObj["gender"] = "Male";
// console.log(myObj);


// delete
// delete myObj.age;
// console.log(myObj);

// Object Iteration of key
// for(let key in myObj){
//     console.log(key); 
// }

// // Object Iteration of Key and Values
// for(const [key,value] of Object.entries(myObj)){
//     console.log(key +" : "+ value); 
// }


// OOPS - object oriented Programming Language
// - objects/instance
// class Person{
// // constructor(){} 
//  constructor(names){
// this.name = names;
//  }
// }
// let myPerson = new Person("John");

// classes

// class Person{
//     constructor(name,age){
//         this.name =name;
//         this.age = age;
//     }
//     greet(){
//         console.log("Hello "+this.name);
//         console.log("Age "+this.age);
//     }
// }
// const person = new Person("John",22);
// const person2 = new Person("Diana",50);
// person2.greet();
// person.greet();


// Inheritance
// class Animal{
//     constructor(name){
//         this.name = name;
//     }
//     speak(){
//         console.log("Animal Speaks");
//     }
// }

// class Dog extends Animal{
//     constructor(name,breed){
//         super(name);
//         this.breed=breed;
//     }

//     speak(){
//         console.log("Dog Barks "+this.name);
//     }
// }

// const myObj = new Dog("Harry","Labarador");
// myObj.speak();


//  Polymorphism
//  Poly-many morphism-forms

// class Shape{
// calcAre(){
//     //common logic area
// }
// }

// class Rectangle extends Shape{
//     calcAre(){
//         //logic rectangle area
//     }
// }

// class Circle extends Shape{
//     calcAre(){
//         // circle area
//     }
// }

// function printArea(shape){
// console.log(shape.calcAre());
// }

// const rec = new Rectangle();
// const circle = new Circle();


// printArea(rec);

// Encapsulation
// bundling together the data nad properties by hiding the internal details, and givving public interface for interaction
// this._name=name;
