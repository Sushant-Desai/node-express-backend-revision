const { log } = require("node:console");
const calculator = require("./calculator")

console.log(calculator.add(2, 5));
console.log(`Substraction is `, calculator.sub(13, 22));
console.log(calculator.sub(13, 2));

console.log("Multiplication is ", calculator.mul(3, 3));
console.log(calculator.division(10, 5));


