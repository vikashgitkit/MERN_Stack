"use strict"; //Treat all JS code as newer version 

//alert (3+4); //when run "node 2_dataTypes.js" will through an error bcz here we are using nodejs,not browser

//Primitive data type
let str = "string";
let age = 12; //number
let isLoggedIn = false; //boolean
let state; //undefined: means we didn't assign the value. typeof is undefined
let weather = null;//standalone value: means nothing get from the api or somewhere. typeof null is object
//symbole: unique
console.log(typeof null);//object
console.log(typeof undefined);//undefined

let id = Symbol('123')
console.log("🚀 ~ id:", id)
let anotherId = Symbol('123')
console.log(id == anotherId)//false: bcz always returns unique value
console.log(id === anotherId)//false

console.log("🚀 ~ anotherId:", anotherId)


const bigNum = 344863487923874837257845n; //bigInt


//non-primitive(reference types): array, object, function
const heros = ["Iron man","hulk", "captain america"]; //array
let myObj = {
    name: 'steve',
    age: 12,
} //object

let a = function() {
    console.log("Hello Function");
} 