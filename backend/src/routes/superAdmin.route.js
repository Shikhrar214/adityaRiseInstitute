import express from "express";
import { Router } from "express";
import { getAllSuperAdmin, createSuperAdmin, updateSuperAdmin, deleteSuperAdmin } from "../controllars/superAdmin.controllar.js";
import { upload } from "../middleware/multer.middelware.js";
import { superAdminAuth } from "../middleware/superAdmin.auth.js";



const sAdminrouter = express.Router()

sAdminrouter.get("/superadmin", superAdminAuth, getAllSuperAdmin);
 
sAdminrouter.post("/superadmin", superAdminAuth, upload.single('photo'), createSuperAdmin );

sAdminrouter.put("/superadmin/:id",superAdminAuth, updateSuperAdmin);

sAdminrouter.delete("/superadmin/:id", superAdminAuth, deleteSuperAdmin);

sAdminrouter.post("/superadmin/login", loginSuperAdmin);



export {sAdminrouter}