import { student } from "../models/student.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { UniqueIdGenerator } from "../utils/uniqueIdGenrator.js";

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

const createStudents = async (req, res) => {
    try {
        const { fullName, fatherName, motherName, dob, gender, course, category, address, post, district, state, pincode, mobile, aadhar, password } = req.body;

        // Check if the student is already registered
        try {
            const alreadyRegisteredStudent = await student.findOne({ $or: [{ mobile }, { aadhar }] });
            if (alreadyRegisteredStudent) {
                return res.status(201).json({
                    success: false,
                    message: "Student is already registered",
                    student: alreadyRegisteredStudent
                });
            }
        } catch (error) {
            console.error("Error checking existing student:", error);
            return res.status(500).json({
                message: "Internal server error while checking registration",
                error,
            });
        }

        // Generate Unique ID
        let generatedId;
        try {
            const existedId = await student.aggregate([
                {
                    $group: {
                        _id: null,
                        greatestId: { $max: "$ID" }
                    }
                }
            ]);

            const currentMaxId = existedId[0]?.greatestId || 0; // Default to 0 if no students exist
            generatedId = UniqueIdGenerator(currentMaxId);
            console.log("Generated ID:", generatedId);
        } catch (error) {
            console.error("Error generating ID:", error);
            return res.status(500).json({
                message: "Failed to generate unique ID",
                error,
            });
        }

        // Validate image file paths
        const sImageLocalPath = req.files?.photo?.[0]?.path;
        if (!sImageLocalPath) {
            return res.status(400).json({
                message: "Photo local path not found"
            });
        }

        const sSignaturePhoto = req.files?.signature?.[0]?.path;
        if (!sSignaturePhoto) {
            return res.status(400).json({
                message: "Signature image local path not found"
            });
        }

        // Upload images to Cloudinary
        const photoRes = await uploadOnCloudinary(sImageLocalPath);
        const signatureRes = await uploadOnCloudinary(sSignaturePhoto);

        // Create new student
        const newStudent = new student({
            ID: generatedId,
            fullName,
            fatherName,
            motherName,
            dob,
            gender,
            course,
            category,
            address,
            post,
            district,
            state,
            pincode,
            mobile,
            aadhar,
            password,
            photo: photoRes.url,
            signature: signatureRes.url,
        });

        await newStudent.save();

        // Respond with success
        res.status(200).json({
            success: true,
            student: newStudent
        });
    } catch (error) {
        console.error("Internal server error:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error,
        });
    }
};


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



// login Students

const loginStudent = async (req, res) => {

    try {
        const { ID, password } = req.body;
        if (!ID) {
            res.status(201).json({
                message: "ID was not Found",
            })
        }

        if (!password) {
            res.status(201).json({
                message: " Password was not Found"
            })
        }


        res.status(200).json({
            sucess: true,
            message: "chal raha hai koi dikkat nahi hai"
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server Error: check login student"
        })
    }
}
// logout  students

export {getAllStudents, createStudents, deleteStudents, updateStudents, loginStudent}


