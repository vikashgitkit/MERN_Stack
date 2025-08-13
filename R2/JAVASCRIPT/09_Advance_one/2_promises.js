//Promises ko create krte he and consume(using fetch) krte he)

//(1)creating promise
const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task
    //ex: DB calls, cryptography, network calls etc

    setTimeout(function() {
        console.log('Async task is complete');
        
    }, 1000)
})