import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

// batabase connection

const connectDB = async () => {
    try {
        const connectionInstence = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log('db connected db_HOST: ', connectionInstence.connection.host);
    } catch (error) {
        console.log("mongodb connection failed : please check your internnet connection || check database connection",error);
        
    }
}

export {connectDB}