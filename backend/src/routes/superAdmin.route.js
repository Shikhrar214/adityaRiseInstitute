import express from "express";
import { Router } from "express";
import { getAdmin, createSuperAdmin, updateSuperAdmin, loginSuperAdmin, logoutAdmin , resetPassword  } from "../controllars/superAdmin.controllar.js";
import { upload } from "../middleware/multer.middelware.js";
import { verifyJWTAdmin } from "../middleware/auth.middleware.js";



const sAdminrouter = express.Router()

sAdminrouter.post("/superadmin", upload.single('photo'), createSuperAdmin );

sAdminrouter.post("/login", loginSuperAdmin);

sAdminrouter.get("/superadmin",verifyJWTAdmin, getAdmin);

sAdminrouter.put("/superadmin/:id", verifyJWTAdmin, updateSuperAdmin); 

sAdminrouter.post("/logout",verifyJWTAdmin, logoutAdmin)



// reset password
sAdminrouter.post("/reset-password", resetPassword);



export {sAdminrouter}