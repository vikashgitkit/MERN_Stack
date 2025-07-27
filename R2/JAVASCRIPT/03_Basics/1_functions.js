//num1 and num2 are parameters
function sum(num1, num2){
    return num1 + num2
}

let result = sum(2,9); //2 and 9 are arguments
console.log("Result is:", result);

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage('Steve'));
