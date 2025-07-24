/*
const arr = [0,2,3,4,1,2,22];//1st way to declare an array
const arr1 = new Array(4,6,3,1,0,9);//2nd way to declare an array
// console.log(typeof arr);//object

// console.log(arr[3]);//3 is index. accesing array value. op: 4

arr.push(6);//adds the elem at last of the array
//arr.pop();//removes the last index value
//arr.unshift(99);//adds elem at start index of the array
arr.shift()//removes first index value
console.log(arr);

console.log(arr.includes(22));//returns boolean and checks 9 is exist in the arr array or not
console.log(arr.indexOf(22));//if the value is exist in the array then it returns index of that value otherwise returns -1

const arr2 = arr.join();//it converts array into string
console.log(arr2); //2,3,4,1,2,22,6
console.log(typeof arr2); //string
*/

//++++++++++++Slice, Splice+++++++++++++//
const arr3 = [3,2,55,12,77,45,89];
const myArr = arr3.slice(1,4);
console.log("myArr:",myArr);//[ 2, 55, 12 ]
console.log("arr3:",arr3);//[3,  2, 55, 12, 77, 45, 89]

const myArr1 = arr3.splice(1,4);
console.log("myArr1:",myArr1);//[ 2, 55, 12, 77 ]
console.log("arr3:",arr3); //arr3: [ 3, 45, 89 ], Means splice manipulate the original array





