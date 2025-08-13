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