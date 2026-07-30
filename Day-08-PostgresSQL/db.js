// const {Pool}=require("pg");
import { Pool } from "pg";
//const dotenv=require('dotenv');
import dotenv from "dotenv"

dotenv.config();

//named export 
export const pool = new Pool({
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || "node_backend_db_learning",

    // Maximum number of database connections in the pool.
    max: 10,
    // If a connection remains unused for 30 seconds, it is closed automatically.
    idleTimeoutMillis: 30000,
    // If a new connection cannot be established within 5 seconds, an error is thrown.
    connectionTimeoutMillis: 5000
});

// export default Pool; (default express)