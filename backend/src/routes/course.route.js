import express from "express";
import { Router } from "express";
import { createCourse, getAllCourses } from "../controllars/course.controller.js";

const courseRouter = express.Router()

courseRouter.get("/courses",getAllCourses)

courseRouter.post("/addcourse", createCourse)


export {courseRouter}