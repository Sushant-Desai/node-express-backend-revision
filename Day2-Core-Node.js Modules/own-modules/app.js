const logger = require("./logger")

logger("Server Started")



// 2nd patterns - Exporting Multiple Functions
const math =require("./math")
console.log(math.add(5,2));
console.log(math.subtract(111,9));
console.log(math.multiply(5,111));

// 3rd patterns - Destructuring Imports

const {add, subtract , multiply} = require("./math")

console.log(add(5,11));
console.log(subtract(95,16));
console.log(multiply(3,3));

// 4th patterns - Exporting Objects

const config = require("./config")

console.log("Port number is ",config.port);
console.log("DB name is ",config.DB_name);

// Exporting Classes

const user = require("./user")

const user1= new user("Sushant")
user1.greet()




