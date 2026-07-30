import express from "express"

import { pool } from "./db.js"

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    try {
        const result = await pool.query("Select NOW()");

        res.json({
            message: "Database Connected successfully",
            time: result.rows[0].now,
        });

    } catch (error) {
        console.log(error);
        res.json({
            message: "Database Connection failed"
        });
    }
});

// fetch all user route
app.get("/users", async (req, res) => {
    try {
        const result = await pool.query("Select * from users")
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Failed to fetch users "
        })
    }
})

// fetch one user 
app.get("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            "Select * from users where id =$1",
            [id]
        );

        res.status(200).json(result.rows)

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Failed to fetch user"
        })


    }
})

// Add user 
app.post("/users", async (req, res) => {
    try {
        const { name } = req.body

        const result = await pool.query
            (
                "Insert into users (name) values ($1)  RETURNING *",
                [name]
            );

        res.status(200).json(result.rows[0])

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");

});
