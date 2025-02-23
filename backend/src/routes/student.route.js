import express from "express";
import  {upload} from '../middleware/multer.middelware.js'
import {  createStudents, updateStudents, loginStudent, logoutStudent, getStudent } from "../controllars/student.controllar.js";
import { verifyJWTStudent } from "../middleware/auth.middleware.js";

const studentRouter = express.Router()


studentRouter.get("/student",verifyJWTStudent, getStudent);

studentRouter.post("/student", upload.fields([{ name: 'photo', maxCount: 1 }, { name: 'signature', maxCount: 1 }]) ,createStudents);

studentRouter.put("/student",verifyJWTStudent, updateStudents);

// studentRouter.delete("/student",deleteStudents);

studentRouter.post("/studentlogin", loginStudent );

studentRouter.post("/studentlogout", verifyJWTStudent, logoutStudent)


export {studentRouter}