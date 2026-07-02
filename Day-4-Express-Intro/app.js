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


app.get("/user",(req,res)=>{

    //Combining status + json
    res.status(200).json({
        success : true ,
        data :{
            id :1,
            name :"Sushant Desai"
        }
    });
});

app.listen(3000);
