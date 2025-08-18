class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(em){
        this._email = em
    }

    get password() {
        return this._password.toUpperCase()
    }

    set password(pass){
        this._password = pass
    } 
}

const user = new User("Alice@gmail.com", "abc")
console.log(user.password);
console.log(user.email);

