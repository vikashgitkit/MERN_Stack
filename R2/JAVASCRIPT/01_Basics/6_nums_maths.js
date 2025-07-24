const score = 400;
console.log(typeof score); //op: number

const balance = new Number(100);
console.log(typeof balance); //op: object
console.log(balance); //op: [Number: 100]

console.log(balance.toString());//convert balance object into string
console.log(balance.toString().length);//then we can also use string methods

console.log(balance.toFixed(2));//means after 100 and . will put 00 so the output is 100.00

const num = 123.8966;
console.log(num.toPrecision(4));//it gives prices value and do the round off


const hundreds = 1000000;
console.log(hundreds.toLocaleString());//It will return default value in us basis so op:1,000,000

console.log(hundreds.toLocaleString('en-IN'));//It will return value in india basis so op:10,00,000

//+++++++++++++++Math Object+++++++++++++++

console.log(Math);
console.log(Math.abs(-4));//abs means absolute. It only converts -ive values in +ive. op-> 4
console.log(Math.round(5.4));//op-> 5



