const express =require("express");

const router=express.Router();

router.get("/",(req,res)=>{
    res.send("All Users ")
})

router.get("/:id",(req,res)=>{
    res.send(`User id is ${req.params.id}`);
})

router.post("/",(req,res)=>{
    res.send("User created ")
})



module.exports= router;