const express = require("express");

const app = express();

const userRoutes = require("./routes/router");
const HomePageRoutes = require("./routes/HomePageRoutes")
app.use("/", HomePageRoutes)
app.use("/users", userRoutes);

app.listen(3000, () => {
    console.log("server is running ");
});