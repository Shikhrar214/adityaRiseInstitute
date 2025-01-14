import { student } from "../models/student.models.js";

// get all students

const getAllStudents = async (req,res) => {
    try {
        const allStudents = await student.find();
        
        if (!allStudents || allStudents.length === 0) {
            res.status(200).json({
                sucess: false,
                message: "student not found"
            })
        }

        // if student available 
        res.status(200).json({
            sucess: true,
            students: allStudents
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: "internal server error",
            error,
        })
    }
}

// create student
const createStudents = async (req,res) => {
    try {
        const { ID, fullName, fatherName, motherName, dob, gender, course, category, address, post, district, state, pincode, mobile, aadhar, password, photo, signature } = req.body; 

        try {
            const alreadyRegisteredStudent = await student.findOne({$or: [{ID: ID},{aadhar: aadhar}]})
            if (alreadyRegisteredStudent) {
                
                return res.status(400).json({
                    sucess: false,
                    message: "student is already registered",
                    student: alreadyRegisteredStudent
                    
                })
            }
        } catch (error) {
            res.status(500).json({
                message: "internal server error"
            })
        }

        const sImageLocalPath = req.files?.studentImage?.path;
        console.log("sImageLocalPath: ", sImageLocalPath);

        const sSignaturePhoto = req.files?.signImage?.path;
        console.log("sSignaturePath: ", sSignaturePhoto);
        
        
        // creating new student
        const newStudent = new student({ID, fullName, fatherName, motherName, dob, gender, course, category, address, post, district, state, pincode, mobile, aadhar, password, photo, signature});
        await newStudent.save();

        // if done
        res.status(200).json({
            sucess: true,
            student: newStudent
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: "internal server error: Check Error",
            error,
        })
    }
}

//  update student
const updateStudents = (req,res) => {
    try {
        const {id} = req.params;
        const {password} = res.body;
        const updateStudent = student.findByIdAndUpdate(id, {password}, {new: true})
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: "internal server error",
            error,
        })
    }
}

// delete student
const deleteStudents = (req,res) => {
    try {
        
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: "internal server error",
            error,
        })
    }
}
export {getAllStudents, createStudents, deleteStudents, updateStudents}