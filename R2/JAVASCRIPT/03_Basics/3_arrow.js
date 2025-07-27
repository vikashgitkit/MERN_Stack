const user ={
    username: "steve",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);//this holds the current context
        
        
    }
}
user.welcomeMessage()//steve, welcome to website
user.username = 'Sam'
user.welcomeMessage()//Sam, welcome to website
console.log(this);//op: {}

//---------------------------------------//
function key() {
    let username = "steve"
    console.log(this.username);//undefined
    
}

const key1 = function() {
    let username = "steve"
    console.log(this.username);//undefined
    
}
key()
key1()

//-------------------Arrow fn---------------//
const key2 = () => {
    let username = "steve"
    console.log(this.username);//undefined
    
}
key2()

const addTwo = (num1, num2) => {
    return num1+num2;
}
//-----------Sorter way. jab single value return hoti he-------------
const addTwo1 = (a, b) => a+b;
console.log(addTwo(2,3));//5
console.log(addTwo1(2,3));//5

const addTwo2 = (a,b) => ({username: 'Steve'})//returning object
console.log(addTwo2(2,3));//{ username: 'Steve' }


