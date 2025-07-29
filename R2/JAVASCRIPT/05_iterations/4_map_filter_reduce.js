const myNums = [1,2,3,4,5,6,7,8,9,10];

//filter also takes callback fn like foreach loop.
//Note: as foreach loop does not return any value so for that case we can use map, filter and reduce, these returns the new array
const newNums = myNums.filter((num) => {
    return num>4
})

console.log(newNums)//[ 5, 6, 7, 8, 9, 10 ]
