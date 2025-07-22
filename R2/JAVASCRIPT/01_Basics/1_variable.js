const accountId = 144523;
let accountEmail = "steve@google.com";
var accountPassword = "12345";
accountCity = "Barmingham";

//let's try to update the values
//accountId = 4; //Will through an error bcz We can't change the const value
accountEmail = "sj@gmail.com";
accountPassword = "8833";
accountCity = "London";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);
