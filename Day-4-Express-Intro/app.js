const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Home Page")
    console.log("This is the URL path", req.url);

    console.log("This is the method of url", req.method);

})

app.get("/about", (req, res) => {
    // res.send("About Page")

    console.log("This is the URL path", req.url);

    console.log("This is the method of url", req.method);

    // res.send("This About Page ")

    res.json({
        success: true,
        message: "About page load"
    })
})

app.get("/contact", (req, res) => {
    // res.send("Contact Page")

    res.status(200).send("Contact page load correctly and All details fetch")

    console.log("This is the URL path", req.url);

    console.log("This is the method of url", req.method);
})


app.get("/user", (req, res) => {

    //Combining status + json
    res.status(200).json({
        success: true,
        data: {
            id: 1,
            name: "Sushant Desai"
        }
    });
});

// Query Parameter 

app.get("/users", (req, res) => {
    res.json(req.query)
    console.log(req.query);

})



// Real Backend Example for query parameter
app.get("/users/pagination", (req, res) => {
    //   const page = req.query.page;
    //   const limit = req.query.limit;

    // we can convert in number
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    console.log(typeof page);
    console.log(typeof limit);



    res.json({
        page,
        limit
    });
});


// Request Parameter 
app.get("/user/:id", (req, res) => {

    //Combining status + json
    res.status(200).json({
        success: true,
        data: {
            id: 1,
            name: "Sushant Desai"
        }
    });
});


app.get("/users/:id", (req, res) => {
    console.log("Checking the route parameters:", req.params);

    res.send(
        `User parameters are ${JSON.stringify(req.params)}\nID is ${req.params.id}`
    );
});


// Product example
app.get("/products/:id", (req, res) => {
    const productId = req.params.id;

    res.json({
        success: true,
        productId
    });
});




app.listen(3000, () => {
    console.log("server is running on port 3000");

});
