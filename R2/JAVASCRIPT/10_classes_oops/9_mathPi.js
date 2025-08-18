const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log("🚀 ~ descripter:", descripter)

console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);

const product = {
    name: 'Neckband',
    price: 999,
    isAvailable: true,
}

console.log(Object.getOwnPropertyDescriptor(product, "name"));


