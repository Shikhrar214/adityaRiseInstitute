import { Course } from "../models/courses.model.js";



// get all couorses
const getAllCourses = async (req,res) => {
    try {
        const allCourses = await Course.find();

        if (!allCourses) {
            res.status(200).json({
                message: "Courses Not Found",
                
            })
        }

        res.status(200).json({
            success: true,
            courses: allCourses,
            

        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: "internal server error",
            error: error
        })
    }
}

// create course
const createCourse = async (req, res) => {
    try {
        const {thumbnail, tutor, price, discountedPrice, message, lastDate, nexttBatchDate, discription} = req.body;

        const newCourse = new Course({thumbnail, tutor, price, discountedPrice, message, lastDate, nexttBatchDate, discription})
        await newCourse.save()

        res.status(200).json({
            success: true,
            course: newCourse
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: "internal server error",
            error: error
        })
    }
}

// update course
const updateCourse = async () => {
    try {
        
    } catch (error) {
        
    }
}

// delete course
const deleteCourse = async () => {
    try {
        
    } catch (error) {
        
    }
}


export {
    getAllCourses,
    createCourse,
    updateCourse,
    deleteCourse
}