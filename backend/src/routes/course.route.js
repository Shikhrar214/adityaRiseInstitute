import express from "express";
import { Router } from "express";
import { createCourse, deleteCourse, getAllCourses, updateCourse } from "../controllars/course.controller.js";
import { verifyJWTAdmin } from "../middleware/auth.middleware.js";

const courseRouter = express.Router()

courseRouter.get("/courses",verifyJWTAdmin, getAllCourses)

courseRouter.post("/course",verifyJWTAdmin, createCourse)

courseRouter.put("/course/:id",verifyJWTAdmin, updateCourse)

courseRouter.delete("/course/:id",verifyJWTAdmin, deleteCourse)


export {courseRouter}