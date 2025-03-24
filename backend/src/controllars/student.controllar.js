import { student } from "../models/student.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { mailer } from "../utils/nodeMailer.js";
import { UniqueIdGenerator } from "../utils/uniqueIdGenrator.js";
import bcrypt from 'bcrypt'


const generateAccessAndRefreshToken = async (studentId) => {
   try {
        const studentRes = await student.findById(studentId)
    
        const accessToken = await studentRes.genrateAccessToken()
        const refreshToken = await studentRes.genrateRefreshToken()
    
        studentRes.refreshToken = refreshToken
        await studentRes.save({validateBeforeSave: false})
        return { accessToken, refreshToken }

   } catch (error) {
        return error
   }
}

const createStudents = async (req, res) => {
    try {
        const { fullName, fatherName, motherName, dob, email, gender, course, category, address, post, district, state, pincode, mobile, aadhar, password } = req.body;

        // Check if the student is already registered
        try {
            const alreadyRegisteredStudent = await student.findOne({ $or: [{ email }, { aadhar }] });
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
            email,
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

        console.log("i am here");
        
        const registeredStudent = await newStudent.save();

        const id = registeredStudent.ID
        const pass = password.trim()
        const name = registeredStudent.fullName
        const registerdEmail = registeredStudent.email
        const subject = "regarding to registration "

        // mail generated id and password
        const mailedData = await mailer(registerdEmail, subject, name, pass, id)
        if (!mailedData) {
            res.status(500).json({
                message: "message not sent"
            })
        }

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


const getStudent = async (req, res) => {
    try {
        const id = req.student._id
       
        
        res.status(200).json({
            success: true,
            id,
            student: req.student
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal server error",
            error: `${error}`
        })
    }
}


// login Students

const loginStudent = async (req, res) => {

    try {
        const { ID, password } = req.body;
        if (!ID && !password) {
            res.status(201).json({
                message: "ID, password  not Found",
            })
        }

     
        
        const foundedStudent = await student.findOne({ID})
        if (!foundedStudent) {
            return res.status(400).json({
                message: "Bad request"
            })
        }

        
        const checkPassword = await bcrypt.compare(password, foundedStudent.password)
        if (!checkPassword) {
            return res.status(401).json({
                message: "invalid credincials"
            })
        }
       

        const id = foundedStudent._id

        const {accessToken, refreshToken} = await generateAccessAndRefreshToken(id);
        
        if (!accessToken && !refreshToken ) {
            return res.status(500).json({
                message: "internal server error"
            })
        }


        const options = {
            httpOnly: true,
            secure: true,
        } 
        

        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json({
            sucess: true,
            email: foundedStudent.email,
            name: foundedStudent.fullName,
            accessToken,
            refreshToken,
        })

    } catch (error) {
        res.status(500).json({
            message: "internal server Error: check login student",
            error: `${error}`,
        })
    }
}
// logout  students

const logoutStudent = async (req, res) => {
    // id
    // refreshtoken update 
    // 
    try {

        const id = req.student._id
        if (!id) return res(500).json({message: "internal server error"})
     
        await student.findByIdAndUpdate(
            id, 
            {
                $set: {
                    refreshToken: undefined
                }
            },
            {
                new: true
            }
        )

        const options = {
            httpOnly: true,
            secure: true,
    
        } 


        return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json({
            success: true,
            message: "user loggedout successfully"
        })

    } catch (error) {
        error: `${error}`
    }
}


const resetPassword = async (req, res) => {
    // const {} = req.body
}

export { 
    createStudents, 
    updateStudents,
    getStudent, 
    loginStudent,
    logoutStudent,
}


