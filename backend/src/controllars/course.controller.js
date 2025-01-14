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
        const {thumbnail, tutor, price, discountedPrice, message, lastDate, nextBatchDate, discription} = req.body;

        const newCourse = new Course({thumbnail, tutor, price, discountedPrice, message, lastDate, nextBatchDate, discription})
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
const updateCourse = async (req, res) => {
    try {
        const {id} = req.params;

        const {thumbnail, tutor, price, discountedPrice, message, lastDate, nextBatchDate, discription} = req.body;

        const courseUpdated = await Course.findByIdAndUpdate(id, {thumbnail, tutor, price, discountedPrice, message, lastDate, nextBatchDate, discription}, {new: true});

        if (!courseUpdated) {
            res.status(400).json({
                sucess: false,
                message: "complete the requirment"
            })
        }

        res.status(200).json({
            sucess: true,
            message: "Updated Sucessfully",
            updatedCourse: updateCourse
        })

    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: "enternal erver error",
            error: error
        })
    }
}

// delete course
const deleteCourse = async (req, res) => {
    try {
        const {id} = req.params;
        const courseDeleted = await Course.findByIdAndDelete(id);
        if (!courseDeleted) {
            res.status(200).json({
                success: false,
                message: "Course Deleted Sucessfully! "
            })
        }

        res.status(200).json({
            success: true,
            message: "Deleted Sucessfully"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: "enternal erver error",
            error: error
        })
    }
}


export {
    getAllCourses,
    createCourse,
    updateCourse,
    deleteCourse
}