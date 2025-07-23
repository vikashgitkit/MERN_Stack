const name = "Steve";
const age = 26;

console.log(`Hello My name is ${name} and age is ${age}`);

const gameName = new String('Barmingham');//create obj of string

console.log(gameName[0]);//B
console.log(gameName.__proto__);//{}
console.log(gameName.length);//
console.log(gameName.toUpperCase());//BARMINGHAM
console.log(gameName.charAt(2));//r
console.log(gameName.indexOf('r'));//2


const newStr = gameName.substring(0,4);
console.log(newStr);//Barm

const sliceStr = gameName.slice(-8, 4);
console.log(sliceStr);//rm

const trimStr = "    Steve    ";
console.log(trimStr);
console.log(trimStr.trim());//trim remove space from start and end









