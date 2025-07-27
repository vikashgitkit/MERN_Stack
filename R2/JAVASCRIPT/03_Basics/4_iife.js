//Immediately invoked function expressions(IIFE)

//jab hme global scope ke polution se bachna ho to hm fn ko turant hi call krdete he lekin isko end krne ke liye ; lgana jruri he tabhi niche ka iife fn execute hoga
(function key() {
  console.log(`DB connected`);
  
})();

(() => {
    console.log(`DB Connected Two`);
    
})()