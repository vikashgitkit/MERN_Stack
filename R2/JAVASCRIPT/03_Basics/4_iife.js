//Immediately invoked function expressions(IIFE)

//jab hme global scope ke polution se bachna ho to hm fn ko turant hi call krdete he lekin isko end krne ke liye ; lgana jruri he tabhi niche ka iife fn execute hoga
(function key() { //this is named iife bcz key is name
  console.log(`DB connected`);
  
})();

(() => {
    console.log(`DB Connected Two`);
    
})();

//passing parameter in iife
((name) => {
    console.log(`DB connected ${name}`);
    
})('Three');