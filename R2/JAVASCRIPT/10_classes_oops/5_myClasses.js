//ES6

class User {
    constructor(username, email, password){
        this.username = username
        this.email  = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }
}

const usr = new User("Steve", "Steve@gmail.com", 123)
console.log("🚀 ~ usr:", usr)
