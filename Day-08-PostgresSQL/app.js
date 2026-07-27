const express =require("express");

const pool = require("./db");


const app=express();

app.get("/",async (req,res)=>{
    try{
        const result= await pool.query("Select NOW()");

        res.json({
            message:"Database Connected successfully",
            time:result.rows[0].now,
        });

    }catch(error){
        console.log(error);
        res.json({
            message:"Database Connection failed"
        });
    }
});


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
    
});
