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

app.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;

    const result = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to create user",
    });
  }
});


// UPDATE user
app.patch("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const result = await pool.query(
      `UPDATE users
       SET name = $1, email = $2
       WHERE id = $3
       RETURNING *`,
      [name, email, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update user",
    });
  }
});

// DELETE user
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User deleted successfully",
      user: result.rows[0],
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to delete user",
    });
  }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");

});
