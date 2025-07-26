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

