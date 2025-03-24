import express from "express";
import { Router } from "express";
import { createCourse, deleteCourse, getAllCourses, updateCourse } from "../controllars/course.controller.js";
import { verifyJWTAdmin, verifyJWTOwner } from "../middleware/auth.middleware.js";

const courseRouter = express.Router()

courseRouter.get("/courses", getAllCourses)

courseRouter.post("/course",verifyJWTOwner, createCourse)

courseRouter.put("/course/:id",verifyJWTOwner, updateCourse)

courseRouter.delete("/course/:id",verifyJWTOwner, deleteCourse)


export {courseRouter}