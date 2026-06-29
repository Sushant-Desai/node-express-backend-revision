const http = require("http");

const server = http.createServer((req,res)=>{
    res.write("Hello From my http module server ");
    res.end();
});

server.listen(3001,()=>{
    console.log("Server is running on the port http://localhost/3001");
    
})