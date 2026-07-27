const {Pool}=require("pg");

const pool=new Pool({
    host:"localhost",
    port:5432,
    user :"postgres",
    password:"root",
    database:"node_backend_db_learning"
});

module.exports=pool;