//for of loop
const arr = [1,2,3,4,5,6];

for (const num of arr){
    // console.log(num);
    
}

const greetings = "Hello Steve"
for (const greet of greetings){
    // console.log(`Each char is ${greet}`);
    
}

//Map
const map = new Map()//map only sets unique key values. as in below we have set india 2 times but it will only set 1 time
map.set('IN', 'India')
map.set('US', 'United states of america')
map.set('FR', 'France')
map.set('IN', 'India')//this will not set

console.log(map); //op: 
// Map(3) {
//   'IN' => 'India',
//   'US' => 'United states of america',
//   'FR' => 'France'
// }

for(const [key, value] of map){
    console.log(key, ':-', value); //op: IN :- India
// US :- United states of america
// FR :- France
    
}

//for of loop will not work for object instead we need to use for in loop
const myObj = {
    game1: 'NFS',
    game2: 'Spiderman',
}

// for(const [key, value] of myObj){
//    // console.log(key, ':-', value);//will give an error
// }

for(const key in myObj){
    console.log(`${key} is: ${myObj[key]}`);
    
}

//fetching data from array using for in loop
const prog = ['js', 'rb', 'py', 'java', 'cpp']
for(const key in prog){
   // console.log(prog[key]);
    
}


//++++++++++++++++++++++++++++++++++++++++++++//
//forEach loop. It will not return any value
const coding = ['js', 'rb', 'py', 'java', 'cpp']

//forEach loop ek callback fn leta he and callback fn ka naam nhi hota he
coding.forEach(function (item) {
    console.log('Codings are:',item);
    
})

//or can also do using arrow fn
coding.forEach((value) => {
    console.log('Coding using arrow fn:', value);
    
})

//or
function printMe(item){
    console.log('using fn:',item);
    
}
coding.forEach(printMe)


//instead item forEach also contains index and whole array as below ex:
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
    
})


//++++++++++++++++++++++++++++++++++++++++++++++//
//Api's se hme generally res milta he as: [{},{}, {}]

const myCoding = [
    {
        langName: "Javascript",
        langFileName: 'js'
    },
     {
        langName: "Java",
        langFileName: 'jv'
    },
     {
        langName: "Python",
        langFileName: 'py'
    }
]

myCoding.forEach((item) => {
    console.log(item.langFileName);
    
})