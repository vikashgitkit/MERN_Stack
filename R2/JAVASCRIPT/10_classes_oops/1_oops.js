//Object literal
const user = {
    username: "steve",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        
        
    }
}

console.log(user.username);
console.log(user.getUserDetails());
// console.log(this);


//Constructor function
function users(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;


    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
        
    }
    return this
}

const userOne = new users("Bob",12, true)
const userTwo = new users("Cavin",55, false)
// console.log(userOne);
console.log(userOne.construcor);
console.log(userTwo);


