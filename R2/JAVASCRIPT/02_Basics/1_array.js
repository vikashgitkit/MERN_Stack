const arr = [0,2,3,4,1,2,22];//1st way to declare an array
const arr1 = new Array(4,6,3,1,0,9);//2nd way to declare an array
// console.log(typeof arr);//object

// console.log(arr[3]);//3 is index. accesing array value. op: 4

arr.push(6);//adds the elem at last of the array
//arr.pop();//removes the last index value
//arr.unshift(99);//adds elem at start index of the array
arr.shift()//removes first index value
console.log(arr);
