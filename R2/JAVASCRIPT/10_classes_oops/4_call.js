function setUsername(username){
    //complex DB calls
    this.username = username
}

function createUser(username, email, password){
    setUsername(username)

    this.email = email
    this.password = password
}