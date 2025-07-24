const myDate = new Date();
/*console.log(typeof myDate);//object

console.log(myDate.toString());//Thu Jul 24 2025 16:50:33 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());//Thu Jul 24 2025
console.log(myDate.toLocaleDateString());//7/24/2025
console.log(myDate.toLocaleString());//7/24/2025, 4:50:33 PM
console.log(myDate.toLocaleTimeString());//4:50:33 PM
console.log(myDate.getTimezoneOffset());//-330
console.log(myDate.getUTCFullYear());//2025 
*/

// let myCreatedDate = new Date(2023, 0, 3);//0(january) is month so in js month start from 0
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date("2023-01-14");//in this 01(jan)
console.log(myCreatedDate.toLocaleString());//1/14/2023, 5:30:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp);//1753356987792
console.log(myCreatedDate.getTime());//This will also convert time in unix timestamp so the op is: 1673654400000
console.log(Math.floor(Date.now()/1000));









