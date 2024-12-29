import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

// middleware
app.use(express.json())
app.use(cookieParser())



// routes imports
import { router } from './routes/superAdmin.route.js'

// routes use
app.use("/api", router)
// /api/superadmin -----> 
app.get("/",(req, res)=>{
    res.send("<h1>hello you are on home route </h1>")
})




export {app}