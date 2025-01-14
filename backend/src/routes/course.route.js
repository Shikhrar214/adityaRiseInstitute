import express from "express";
import { Router } from "express";
import { createCourse, deleteCourse, getAllCourses, updateCourse } from "../controllars/course.controller.js";

const courseRouter = express.Router()

courseRouter.get("/courses",getAllCourses)

courseRouter.post("/course", createCourse)

courseRouter.put("/course/:id", updateCourse)

courseRouter.delete("/course/:id", deleteCourse)


export {courseRouter}