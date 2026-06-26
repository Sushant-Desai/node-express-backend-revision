const http = require("http")

const server = http.createServer((req, res) => {

    console.log("Method of Request", req.method);
    console.log("URL", req.url);
    console.log(req.headers);

    res.statusCode = 200;
    res.setHeader("Content-type", "application/json")

    const user = {
        id: 101,
        name: "Sushant",
        age: 24,
        city: "Pune"
    }
    res.end(JSON.stringify(user));


});

server.listen(3000, () => {
    console.log("Server running on port 3000");

});
