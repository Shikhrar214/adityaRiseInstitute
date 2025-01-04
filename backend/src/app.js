import express, { urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'


const app = express()

// middleware
app.use(cors({
    origin: process.env.CORSE_ORIGIN,
    credentials: true
}))
app.use(express.json())
app.use(urlencoded({extended: false }))
app.use(cookieParser())



// routes imports
import { sAdminrouter } from './routes/superAdmin.route.js'
import {studentRouter} from './routes/student.route.js'
import { courseRouter } from './routes/course.route.js'


// routes use
app.use("/api", sAdminrouter)
app.use("/api", studentRouter)
app.use("/api", courseRouter)




// /api/superadmin -----> 
app.get("/",(req, res)=>{
    res.send("<h1>hello you are on home route </h1>")
})




export {app}