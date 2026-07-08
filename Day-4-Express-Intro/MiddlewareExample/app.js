const express =require("express")

const logger = require("./logger")

const auth=require("./auth")

const app = express();

app.use(logger);
app.use(auth);



app.get("/",(req,res)=>{
    res.send("Home Page")
});


app.listen(3000,(req,res)=>{
    console.log("Server is running on 3000 port");
    
})