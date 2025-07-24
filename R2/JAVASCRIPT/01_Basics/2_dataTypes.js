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

//In js there are 2 types of memories (a) stack (b)heap
// (a)Stack(shallo copy): primitive data types are stored in stack and in stack when we assign existing variable to another new variable then it creates copy of that memory so in new variable changes does not happens in old variable values.like ex below:

let myVar = "this will be in stack";
let newVar = myVar;
newVar = "This update in newVar stack memory";
console.log("MyVar is:",myVar ); //"this will be in stack";
console.log("New Var is:",newVar);//This update in newVar stack memory


// (b)Heap(deep copy): isme non-primitive data types rehte he and ye value ki copy nhi dete ye original values de dete he memory mese.meanse ye reference de deta he. Ex:
let userOne = {
    email: "user1@gmail.com",
    upi: "use@ybl",
}

let userTwo = userOne;
userTwo.email = 'Steve@gmail.com';
console.log("user one object is:", userOne); //op: user one object is: { email: 'Steve@gmail.com', upi: 'use@ybl' }
console.log("user two object is:", userTwo);//op: user one object is: { email: 'Steve@gmail.com', upi: 'use@ybl' }

