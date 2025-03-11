import express from 'express'
import { blockAdmin, getAllAdmins, getAllOwners, getAllStudents, login, logOut, registerOwner, resetPassword, unBlockAdmin, verifyAdmin } from '../controllars/owner.controller.js'
import { verifyJWTOwner } from '../middleware/auth.middleware.js'


const ownerRouter = express.Router()



ownerRouter.post("/register", registerOwner)

ownerRouter.get("/owners",verifyJWTOwner, getAllOwners)

ownerRouter.get("/allAdmin",verifyJWTOwner, getAllAdmins)

ownerRouter.get("/allStudents",verifyJWTOwner, getAllStudents)

ownerRouter.post("/block/:id",verifyJWTOwner, blockAdmin)

ownerRouter.post("/unblock/:id",verifyJWTOwner, unBlockAdmin)

ownerRouter.put("/verify/:id",verifyJWTOwner, verifyAdmin)

ownerRouter.post("/login", login)

ownerRouter.post("/logout",verifyJWTOwner, logOut)

ownerRouter.post("/reset-password", resetPassword)


export {ownerRouter}