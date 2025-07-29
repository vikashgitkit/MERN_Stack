const myNums = [1, 2, 3]
//it reduces the arr and give single output
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

//sorter weay using arrow fn
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);