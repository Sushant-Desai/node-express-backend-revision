const { log } = require("console");

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b
}

const mul = (a, b) => {
    return a * b
}

console.log(mul);

function division(a, b) {
    return a / b
}

module.exports = {
    add, division, mul, sub
}