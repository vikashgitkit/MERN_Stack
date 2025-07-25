//(1)singlton object
//we can create as: Object.create

//(2)Object literals
const jsUser = {
    name: "steve",
    age: 17,
    location: 'Jaipur',
    email: 'steve@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Sat"],
}

console.log(jsUser.email);//Traditional way to access obj values but this is not good way
console.log(jsUser["email"]);//This is good way to access obj values. "" me key isliye dena pdta he kuki js behind the scens key ko bhi string me hi convert krta he

