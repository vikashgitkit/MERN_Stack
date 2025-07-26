/*
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
const obj3 = Object.assign({}, obj1, obj2);//But this is not much used instead spread op is used more.
console.log("🚀 ~ obj3:", obj3)// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj4 = {...obj1, ...obj2}
console.log("🚀 ~ obj4:", obj4)// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser));//[ '123abc', 'Steve', false ]
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true
*/

//object destructuring
const course = {
    coursename: 'js course',
    price: '999',
    courseInstructor: 'Steve',
}

const {courseInstructor} = course;
console.log(courseInstructor);
//---------OR if you see that courseInstructor is big name so let's give sort name------------//
const {courseInstructor: instructor} = course;
console.log(instructor);

