//for of loop
const arr = [1,2,3,4,5,6];

for (const num of arr){
    // console.log(num);
    
}

const greetings = "Hello Steve"
for (const greet of greetings){
    // console.log(`Each char is ${greet}`);
    
}

//Map
const map = new Map()//map only sets unique key values. as in below we have set india 2 times but it will only set 1 time
map.set('IN', 'India')
map.set('US', 'United states of america')
map.set('FR', 'France')
map.set('IN', 'India')//this will not set

console.log(map); //op: 
// Map(3) {
//   'IN' => 'India',
//   'US' => 'United states of america',
//   'FR' => 'France'
// }

for(const key of map){
    console.log(key); //op: [ 'IN', 'India' ]
// [ 'US', 'United states of america' ]
// [ 'FR', 'France' ]
    
}
