const marvel_heros = ['thor', "Ironman", "Spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);//[ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]

//Now if you need to access another array value of an array suppose 'flash'
// console.log(marvel_heros[3][1]);//flash

const newArr = marvel_heros.concat(dc_heros);
console.log(newArr);//concat merges two array and return new array


