class User {
    constructor(username){
        this.username = username
    }

    logMe() {
        console.log(`username: ${this.username}`);
        
    }
//static keyword object ke reference ko access krne se rok dega
    static createId() {
        return `123`
    }
}

const user = new User("Steve")
// console.log(user.createId);//jesa ki user User object ka reference he or mene createId par static use kiya he to ye access allow nhi krta he error dega


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const teacher = Teacher("Bob", "bob@gmail.com")
console.log(teacher.createId())
