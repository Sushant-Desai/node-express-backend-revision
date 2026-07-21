require("dotenv").config();
const express=require("express");
const studentsRoutes=require("./routes/studentRoutes")

const app=express();

app.use(express.json());

app.use("/students",studentsRoutes);

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
});