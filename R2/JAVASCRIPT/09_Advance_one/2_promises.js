//Promises ko create krte he and consume(using fetch) krte he)

//(1)creating promise
const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task
    //ex: DB calls, cryptography, network calls etc

    setTimeout(function() {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

//(2)Consuming the promise
promiseOne.then(function(){
    console.log('Promise consumed');
    
})

//Sorter way to create and consume promise
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2");
        resolve();
        
    }, 1000)
}).then(function() {
    console.log("Async 2 resolved");
    
})
//===============================================//

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve({username: "Steve", email: "steve@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

//================================================//
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let err = false
        if(!err){
            resolve({username: "Bob", password: 123})
        } else {
            reject("Error: Something went wrong")
        }
    }, 1000)
})

//Promise hell jisme hm multiple then ka use krte he and jo first bale then se return hota he use dusre then me pass krte he.
promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
    
}).catch(function(err) {
    console.log(err);
    
})