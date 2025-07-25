const marvel_heros = ['thor', "Ironman", "Spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);//[ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]

//Now if you need to access another array value of an array suppose 'flash'
// console.log(marvel_heros[3][1]);//flash

const newArr = marvel_heros.concat(dc_heros);
console.log(newArr);//concat merges two array and return new array.although we prefer spread operator(...

const allNewHeros = [...marvel_heros, ...dc_heros];
console.log(allNewHeros);


const arr = [2,43,1,[4,5,3],66,[34,56,[9,6,4]]];
const arr1 = arr.flat(Infinity);
console.log(arr1);//[2, 43,  1,  4, 5,3, 66, 34, 56, 9,6,  4]

console.log(Array.isArray("Steve"));//false
console.log(Array.from("Steve"));//convert steve in array. op: [ 'S', 't', 'e', 'v', 'e' ]
console.log(Array.from({name: "Steve"}));//op:[], bcz it ask wether you want to convert key or value as an array

let scr1=100;
let scr2=200;
let scr3=300;

console.log(Array.of(scr1, scr2, scr3));//[ 100, 200, 300 ]










