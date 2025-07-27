var c = 300
let a = 355
const b = 123
if(true) {
    let a = 10
    const b = 20
    var c = 30
}
console.log(a);// op: 355
console.log(b);// op: 123
console.log(c);//op: 30



//Nested scope
function one() {
    const username = 'Steve';

    function two() {
        const website = 'Google'
        console.log(username);
        
    }
    // console.log(website);//error: website is not defined
    two() 
    
}
one()

//++++++++++++++++Interesting+++++++++++++++//

console.log(addOne(5));//op: 6

function addOne(num){
    return num + 1
}

console.log(addTwo(10)); //ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num + 2
}

