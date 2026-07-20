const express =require("express")

const router=express.Router();

router.get("/",(req,res)=>{
    res.send("This is Our Home page ")
})

module.exports=routes;