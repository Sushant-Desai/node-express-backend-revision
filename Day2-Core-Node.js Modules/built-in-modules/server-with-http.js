const http = require("http");

// Create server
const server = http.createServer((req, res) => {

    // Print request details in terminal
    console.log("URL:", req.url);
    console.log("Method:", req.method);

    // Check which URL the user visited
    if (req.url === "/") {
        res.end("Welcome Home");
    }
    else if (req.url === "/about") {
        res.end("About Page");
    }
    else if (req.url === "/contact") {
        res.end("Contact Page");
    }
    else {
        res.end("404 Page Not Found");
    }
});

// Start server
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});