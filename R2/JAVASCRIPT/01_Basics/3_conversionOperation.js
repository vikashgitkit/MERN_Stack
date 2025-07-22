let score = "33";
let score1 = "33abc";
let score2 = null
let score3 = undefined

// console.log(typeof(score));//string
//convert string into number
const valueInNumber = Number(score);
const valueInNumber1 = Number(score1);
const valueInNumber2 = Number(score2);
const valueInNumber3 = Number(score3);

// console.log(typeof valueInNumber);//number
// console.log(valueInNumber1); //NaN
// console.log(valueInNumber2); //0
// console.log(valueInNumber); //NaN

//------------------------------//
let isLoggedIn = 1
let isLoggedIn1 = ""
let isLoggedIn2 = "steve"

let booleanIsLoggedIn = Boolean(isLoggedIn)
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)


// console.log(booleanIsLoggedIn); //true
// console.log(booleanIsLoggedIn1); //false
// console.log(booleanIsLoggedIn2); //true

//---------------------------------//

let someNum = 33;
let stringNum = String(someNum);
// console.log(typeof stringNum); //string
// console.log(stringNum); //33


// ******************** Operations *******************
// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// console.log(3+4*5%3); //this is way not recommended, instead should use () so it will execute step by step like below
// console.log((3+4)*(5%3));


//-------------- Prefix and Postfix------//
// ✅ 1. Postfix (i++ / i--):
//Use the value first, then increment/decrement it.

let i = 5;
let result = i++;  // result = 5, i becomes 6
console.log(result, i);

// ✅ 2. Prefix (++i / --i):
// Increment/decrement first, then use the value.
let j = 5;
let inc = ++j;  // j becomes 6, inc = 6
console.log(inc, j);










