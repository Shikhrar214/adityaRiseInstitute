import express from "express";
import { Router } from "express";
import { getAllSuperAdmin, createSuperAdmin, updateSuperAdmin, deleteSuperAdmin } from "../controllars/superAdmin.controllar.js";
import { upload } from "../middleware/multer.middelware.js";


const sAdminrouter = express.Router()

sAdminrouter.get("/superadmin", getAllSuperAdmin);

sAdminrouter.post("/superadmin", upload.single('photo'), createSuperAdmin );

sAdminrouter.put("/superadmin/:id", updateSuperAdmin);

sAdminrouter.delete("/superadmin/:id", deleteSuperAdmin);

// sAdminrouter.post("/superadmin/login", loginSuperAdmin);



export {sAdminrouter}