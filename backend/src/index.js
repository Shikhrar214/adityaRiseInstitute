import dotenv from 'dotenv'
import express from 'express';
import { app } from "./app.js";
import { connectDB } from './db/index.db.js';


dotenv.config() 


app.use(express.json())

connectDB()
.then(app.listen(process.env.PORT || 3001,(req, res)=>{
    console.log("app is running on port -----------------", process.env.PORT);
    
}))
















console.log("server started  successfully .................");
