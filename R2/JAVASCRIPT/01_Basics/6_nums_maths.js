const score = 400;
console.log(typeof score); //op: number

const balance = new Number(100);
console.log(typeof balance); //op: object
console.log(balance); //op: [Number: 100]

console.log(balance.toString());//convert balance object into string
console.log(balance.toString().length);//then we can also use string methods

