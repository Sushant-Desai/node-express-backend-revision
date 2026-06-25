//Http Module-  Used to create a web server without Express.

const http = require("http");


const server = http.createServer((req, res) => {
    res.end("Hello World")
})

server.listen(3000, () => {
    console.log("Server is running");

})