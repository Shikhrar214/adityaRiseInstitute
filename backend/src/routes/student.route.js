import express from "express";
import { Router } from "express";
import { getAllStudents, createStudents, updateStudents, deleteStudents } from "../controllars/student.controllar.js";

const studentRouter = express.Router()


studentRouter.get("/student",getAllStudents);

studentRouter.post("/student", createStudents);

studentRouter.put("/student",updateStudents);

studentRouter.delete("/student",deleteStudents);



export {studentRouter}