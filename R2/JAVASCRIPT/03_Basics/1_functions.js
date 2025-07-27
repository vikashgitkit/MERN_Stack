//num1 and num2 are parameters
function sum(num1, num2){
    return num1 + num2
}

let result = sum(2,9); //2 and 9 are arguments
console.log("Result is:", result);

//sam is default value like in fn calling if usrname is not passed then it will take sam in usrname
function loginUserMessage(username = 'sam'){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
        
    // }
    //----------OR-----------
    if(!username){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage('Steve'));
console.log(loginUserMessage());

//agar hme pta nhi he ki fn me kitni values aane bali he to hum rest or spread operator ka use krte he
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(111,32,566,123,432));//[ 566, 123, 432 ]


const usr = {
    username: "steve",
    price: 199,
}

//pass object in function
function handleObject (anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
handleObject(usr)


