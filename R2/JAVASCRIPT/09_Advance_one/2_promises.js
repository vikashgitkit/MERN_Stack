//Promises ko create krte he and consume(using fetch) krte he). As promises ka use hm jab krte he jab koi kaam future me hone bala ho

//(1)creating promise
const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //ex: DB calls, cryptography, network calls etc

  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

//(2)Consuming the promise
promiseOne.then(function () {
  console.log("Promise consumed");
});

//Sorter way to create and consume promise
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});
//===============================================//

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Steve", email: "steve@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

//================================================//
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let err = false;
    if (!err) {
      resolve({ username: "Bob", password: 123 });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

//Promise hell jisme hm multiple then ka use krte he and jo first bale then se return hota he use dusre then me pass krte he.
promiseFour
  .then((user) => {
    console.log("User:", user);
    return user.username;
  })
  .then((username) => {
    console.log("Username:", username);
  })
  .catch(function (err) {
    console.log(err);
  }).finally(() => console.log("The promise is either resolved or rejected")
  )

  //================================================//
//Async/await also works similar to .then .catch
  const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
  })

  async function consumePromiseFive() {
    try{
        const res = await promiseFive
        console.log("Response is:", res);
        
    } catch(err) {
        console.log("Error:", err);
        
    }
    
  }
  consumePromiseFive()

  //=================================================//

  async function getAllUsers() {
    try{
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json();
      console.log("Data is:", data);
      
    } catch(err) {
      console.log("Error:", err);
      
    }
  }
  getAllUsers()

  //now let's do same thing using fetch .then
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

//===================================================// 
// promise.all
// 1. Promise.all क्या है?
// Promise.all() JavaScript का method है जो:

// एक array (या iterable) में दिए गए multiple promises को parallel में चलाता है

// सिर्फ तब resolve होता है जब सारे promises resolve हो जाते हैं

// अगर एक भी promise reject हो जाए, तो पूरा Promise.all() reject हो जाता है

// 2. Simple समझो
// सोचो आपके पास तीन दोस्त हैं, और आपने तीनों से पानी लाने को कहा.

// Promise.all ऐसा है जैसे आप तीनों के लौटने का इंतज़ार करते हो, और फिर सबका पानी एक साथ ले लेते हो.

// लेकिन अगर एक दोस्त रास्ते में गिर गया (error आ गया), तो आप बाकी का पानी भी ignore कर देते हो और कहते हो — “Mission fail”.
//Real-life Example — API calls parallel में करना
async function getAllData() {
  try {
    let [posts, users, comments] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()),
      fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()),
      fetch("https://jsonplaceholder.typicode.com/comments").then(res => res.json())
    ]);

    console.log("Posts:", posts.length);
    console.log("Users:", users.length);
    console.log("Comments:", comments.length);
  } catch (err) {
    console.error("Error in fetching data:", err);
  }
}

getAllData();
