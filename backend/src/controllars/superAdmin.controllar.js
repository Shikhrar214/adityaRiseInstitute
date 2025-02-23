import { superAdmin } from "../models/superAdmin.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { mailer } from "../utils/nodeMailer.js";
import jwt from "jsonwebtoken";

// BUSSINESS LOGIC


// genrate access and refresh token

const genrateAccessAndRefreshToken = async (sAdminId) => {
    try {
        const admin = await superAdmin.findById(sAdminId);
        
        
        const accessToken = admin.genrateAccessToken()
        const refreshToken = admin.genrateRefreshToken()

        admin.refreshToken = refreshToken
        await admin.save({validateBeforeSave: false})
        return {accessToken, refreshToken}


    } catch (error) {
        return error
    }
}

// get  admin
const getAdmin = async (req, res) => {
    try {

        const token = req.cookies?.accessToken
       
        
        if (!token) return res.status(400).json({
            message: "please login"
        })
        console.log("token =>: ", token);

        const verifyToken = jwt.verify(token, process.env.JWT_ACCESS_TOKEN)

        if (!verifyToken) return res.status(400).json({message: "user not loggedin"})
            
        const id = verifyToken._id

        const admin = await superAdmin.findById(id).select("-password -refreshToken")

        if(!admin) return res(400).json({message: "user not authenticated"})
        console.log(admin);
        
        res.status(200).json({
            message: "success",
            admin,
        })
        
    } catch (error) {
        res.status(500).json(
            {
                sucess: false,
                message: "internal server error",
                error: error,
                
            }
        )
    }
}

// create Super Admin
const createSuperAdmin = async (req, res) => {
    try {

        const {fullName, email, role, mobileNumber, fullAddress, branchName, branchLocation, aadhar, password} = req.body;

        // check admin exist or not
        try {
            const existedSuperAdmin = await superAdmin.findOne({email}).select("-password")
            if (existedSuperAdmin) {
                return res.status(400).json({
                    message: "user already exist",
                    user: existedSuperAdmin.toObject()
                })  
            }
        } catch (error) {
            
        }
        
           
        const sAdminPhotoLocalPath =  req.file?.path;
          
          
        // if photo local path not found
        if (!sAdminPhotoLocalPath) {
            res.status(500).json({
                status: false,
                message: "Admin photo local path not found"
            })
        }

        

       
        // cloudinary upload
        const sAdminPhoto = await uploadOnCloudinary(sAdminPhotoLocalPath)
        
        // const photo = sAdminPhoto.url
      
        
        
        const newSuperAdmin = new superAdmin({
            fullName,
            email, 
            role, 
            photo: sAdminPhoto.url,  
            mobileNumber, 
            fullAddress, 
            branchName, 
            branchLocation, 
            aadhar, 
            password

        });

    //    create super admin
        const createdUser=  await newSuperAdmin.save();
        
    
    // mailer
    const to = createdUser.email
    const subject = `Registration Successfull`
    const AdminName = createdUser.fullName
    const pass = password.trim()
    const sendMailAfterAdminCreation =  await mailer(to, subject, AdminName, pass ) 
    if (!sendMailAfterAdminCreation) {
        res.status(500).json({
            message: "message not sent"
        })
    }
    
    

    // send success responce
        res.status(200).json({
            
            superAdmin: {
                name: newSuperAdmin.fullName,
                email: newSuperAdmin.email,
                message: `${newSuperAdmin.fullName} created sucessfully!`
            }
        })
    } catch (error) {
        res.status(500).json(
            {
                sucess: false,
                message: "internal server error",
                error: error,
                
            }
        )
    }

    
}


// update super Admin
const updateSuperAdmin = async (req, res) => {
    try {
        const {id} = req.params;
        const {password} = req.body;
        const updateSuperAdmin = await superAdmin.findByIdAndUpdate(id, {password}, {new: true});

        if (!updateSuperAdmin) {
            return res.status(200).json({
                sucess: false,
                message: "cannot find the admin"
            })
        }

        res.status(200).json({
            sucess: true,
            message: updateSuperAdmin
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error
        })
    }
}

// login super admin

const loginSuperAdmin = async (req, res) => {
   
    try {
        const {email, password} = req.body;
        
        if (!email && !password) {
            return res.status(400).json(
                {
                    success: false,
                    message: "email and password required"
                }
            )
        }
        const admin = await superAdmin.findOne({email})
        if (!admin) {
            return res.status(400).json({
                message: "person not found"
            })
        }
        const correctPass = await admin.isPassCorrect(password)
    
        if (!correctPass) {
            return res.status(401).json({
                message: "Person not found "
            })
        }
    
        // token
        const adminId = admin._id
        
        const {accessToken, refreshToken} = await genrateAccessAndRefreshToken(adminId)

        if (!accessToken && !refreshToken) {
            res.status(500).json({
                message: "internal server error"
            })
        }
       
        const loggdinAdmin = await superAdmin.findById(adminId).select("-password -refreshToken")
        
        const options = {
            httpOnly: true,
            secure: true,
    
        } 
        
        
        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            {
                success: true,
                email: loggdinAdmin.email,
                fullName: loggdinAdmin.fullName,
                branch: loggdinAdmin.branchName,
                accessToken,
                refreshToken, 
                message: "user loggedin successfully"
            }
        )
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error || "internal server error", 
            message: `error found= ${error}`
        })
    }
}

// logout admin

const logoutAdmin = async (req, res) => {
    try {
        // get id from req.cookie
        // set cookie = null
        const id = req.admin._id
        
        
        if(!id) return res.status(400).json({
            message: "unauthorize request"
        })
        console.log(id);
        await superAdmin.findByIdAndUpdate(id, 
            {
                $set: {
                    refreshToken: undefined,
                }
            },

            {
                new: true
            },
        )

        const options = {
            httpOnly: true,
            secure: true,
    
        } 

        res.status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json({
            message: "user logged out"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error || "internal server error", 
            message: `error found = ${error}`
        })
    }
    
}





export {
    getAdmin, 
    createSuperAdmin, 
    updateSuperAdmin, 
    loginSuperAdmin,
    logoutAdmin,

}

