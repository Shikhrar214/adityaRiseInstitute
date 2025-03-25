import dotenv from 'dotenv'
import express, { urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'


const app = express()

// middleware
app.use(cors({
    origin: "https://arci-black.vercel.app/",
    credentials: true
}))
app.use(express.json())
app.use(urlencoded({extended: true }))
app.use(cookieParser())



// routes imports
import { sAdminrouter } from './routes/superAdmin.route.js'
import {studentRouter} from './routes/student.route.js'
import { courseRouter } from './routes/course.route.js'
import { ownerRouter } from './routes/owner.routes.js'
import { otpRouter } from './routes/otp.route.js'


// routes use
app.use("/api/v1/admins", sAdminrouter)
app.use("/api/v1/students", studentRouter)
app.use("/api/v1/courses", courseRouter)
app.use("/api/v1/owner", ownerRouter)
app.use("/api/v1", otpRouter)



// /api/ -----> 
app.get("/api/v1",(req, res)=>{
    res.send("<h1>hello </br> you are WELCOME! </h1>")
})




export {app}