import dotenv from 'dotenv'
import express from 'express';
import { app } from "./app.js";
import { connectDB } from './db/index.db.js';
import { v2 as cloudinary } from 'cloudinary';
dotenv.config({path: "./.env"}) 

const cloud = cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});


app.use(express.json())

connectDB()
.then(app.listen(process.env.PORT || 3001,(req, res)=>{
    console.log("app is running on port -----------------", process.env.PORT);
    
}))
















console.log("server started  successfully .................");
