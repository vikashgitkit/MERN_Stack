const tinderUser = {}

tinderUser.id = '123abc';
tinderUser.name = 'Steve';
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "steve",
            lastname: "bow"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}
const obj3 = Object.assign({}, obj1, obj2);
console.log("🚀 ~ obj3:", obj3)// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

