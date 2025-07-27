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

