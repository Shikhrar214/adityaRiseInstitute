import express,{ Router } from "express";
import  {upload} from '../middleware/multer.middelware.js'
import { getAllStudents, createStudents, updateStudents, deleteStudents } from "../controllars/student.controllar.js";

const studentRouter = express.Router()


studentRouter.get("/student",getAllStudents);

studentRouter.post("/student", upload.fields([{ name: 'studentImage', maxCount: 1 }, { name: 'signImage', maxCount: 1 }]) ,createStudents);

studentRouter.put("/student",updateStudents);

studentRouter.delete("/student",deleteStudents);



export {studentRouter}