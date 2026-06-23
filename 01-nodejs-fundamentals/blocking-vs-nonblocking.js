// Blocking - In Blocking I/O, Node.js waits until the operation completes.

var fs= require('fs');

fs.writeFileSync("SushantDesai.txt","My name is Sushant Desai.")


const data =fs.readFileSync("SushantDesai.txt","utf8")

console.log(data);

console.log("Finished");

// Non-Blocking - In Non-Blocking I/O, Node.js does not wait for the operation to complete and continues executing the next line of code.


fs.readFile("SushantDesai.txt","utf8",(err,data)=>{
    console.log("This is non blocking example Below finished works before this function",data);
    
})
console.log("Finished")






