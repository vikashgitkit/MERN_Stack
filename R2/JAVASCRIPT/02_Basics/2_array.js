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






