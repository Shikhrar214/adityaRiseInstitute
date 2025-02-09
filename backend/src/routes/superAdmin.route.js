import express from "express";
import { Router } from "express";
import { getAllSuperAdmin, createSuperAdmin, updateSuperAdmin, deleteSuperAdmin, loginSuperAdmin   } from "../controllars/superAdmin.controllar.js";
import { upload } from "../middleware/multer.middelware.js";
// import { superAdminAuth } from "../middleware/superAdmin.auth.js";



const sAdminrouter = express.Router()

sAdminrouter.get("/superadmin", getAllSuperAdmin);
 
sAdminrouter.post("/superadmin", upload.single('photo'), createSuperAdmin );

sAdminrouter.put("/superadmin/:id", updateSuperAdmin);

sAdminrouter.delete("/superadmin/:id", deleteSuperAdmin);

sAdminrouter.post("/login", loginSuperAdmin);



export {sAdminrouter}