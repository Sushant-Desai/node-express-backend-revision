const express =require("express");

const app= express();

const userRoutes =require("./routes/userRoutes");

app.use(express.json());

app.use(express.static("public"));
app.use("/uploads",express.static("uploads"))
app.use("/",userRoutes);

const PORT=3000;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT} `);
})