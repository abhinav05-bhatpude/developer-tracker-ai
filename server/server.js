const express=require("express");
const dotenv=require("dotenv");
const connectDB = require("./config/db");

const app=express();
dotenv.config();

connectDB();

const PORT=5000;

app.get("/",(req,res)=>{
    res.send("DevTrack API Running");
});

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});
