//(1)singlton object
//we can create as: Object.create

//(2)Object literals

const mySymb = Symbol("key1");
const jsUser = {
    name: "steve",
    "full name": "Steve bow",
    age: 17,
    [mySymb]: "myKey1",
    location: 'Jaipur',
    email: 'steve@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Sat"],
}
/*
console.log(jsUser.email);//Traditional way to access obj values but this is not good way bcz now you can't access "full name" key
console.log(jsUser["full name"]);//This is good way to access obj values. "" me key isliye dena pdta he kuki js behind the scens key ko bhi string me hi convert krta he

console.log(jsUser[mySymb]);

jsUser.email = "ben@gmail.com";//updating value in obj
Object.freeze(jsUser);//ab app object ki value me changes nhi kar payenge
jsUser.age = 22;//this value will not update as we have freez object
console.log(jsUser);
*/

jsUser.greeting = function() {
    console.log("Hello Steve");
    
}
jsUser.greetingTwo = function() {
    console.log(`Hello second Steve you age is ${this.age}`); //using this keyword bcz access the same obj key
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());




