import express from "express";
import { Router } from "express";
import { getAllSuperAdmin, createSuperAdmin, updateSuperAdmin, deleteSuperAdmin } from "../controllars/superAdmin.controllar.js";
import { getAllStudents, createStudents, updateStudents, deleteStudents } from "../controllars/student.controllar.js";

const router = express.Router()

router.get("/superadmin", getAllSuperAdmin);

router.post("/superadmin", createSuperAdmin );

router.put("/superadmin/:id", updateSuperAdmin);

router.delete("/superadmin/:id", deleteSuperAdmin);

// student router

router.get("/student",getAllStudents);

router.post("/student", createStudents);

router.put("/student",updateStudents);

router.delete("/student",deleteStudents);




export {router}