import { superAdmin } from "../models/superAdmin.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { mailer } from "../utils/nodeMailer.js";

// BUSSINESS LOGIC


// genrate access and refresh token

const genrateAccessAndRefreshToken = async (req, res, sAdminId) => {
    try {
        const admin = await superAdmin.findById(sAdminId);
        const accessToken = admin.genrateAccessToken()
        const refreshToken = admin.genrateRefreshToken()

        admin.refreshToken = refreshToken
        await admin.save({validateBeforeSave: false})

        return {accessToken, refreshToken}


    } catch (error) {
        res.status(500).json({
            message: "internal server error",
        })
    }
}

// get all Super admin
const getAllSuperAdmin = async (req, res)=>{
    try {
        const allSuperAdmin = await superAdmin.find();
        if (!allSuperAdmin || allSuperAdmin.length === 0) {
            res.json({
                message: "superAdmin not found"
            })
        }

        // if superAdmin found
        res.status(200).json({
            sucess: true,
            superAdmin: allSuperAdmin
        })
    } catch (error) {
        res.status(200).json(
            {
                sucess: false,
                message: "not found any product"
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

        console.log("Local path of Admin: ",sAdminPhotoLocalPath);

       
        // cloudinary upload
        const sAdminPhoto = await uploadOnCloudinary(sAdminPhotoLocalPath)
        
        // const photo = sAdminPhoto.url
        console.log(sAdminPhoto);
        
        
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
        
    //
    // mailer
    // get registerd user 
    // de-construct user {email}
    // to=email, subject, text
    const to = createdUser.email
    const subject = `Registration Successfull`
    const AdminName = createdUser.fullName
    const pass = password.trim()
    const sendMailAfterAdminCreation =  await mailer(to, subject, AdminName, pass ) 
    console.log(sendMailAfterAdminCreation);
    

    // send success responce
        res.status(200).json({
            
            superAdmin: newSuperAdmin.select("-password")
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
            res.status(200).json({
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


// delete super Admin
const deleteSuperAdmin = async (req, res) => {
    try {
        const {id} = req.params;

        const deleteSuperAdmin = await superAdmin.findByIdAndDelete(id)
        if (!deleteSuperAdmin) {
            res.json({
                message: "superAdmin not found"
            })
        }

        res.status(200).json({
            message: "super admin deleted sucessfully"
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error
        })
    }
}


const loginSuperAdmin = () => {
    // login super admin
    // get user from ---> req.body;
    // find the super admin
    // password check 
    // access and refresh token
    // send cookies
}

const logoutSuperAdmin = () => {}





export {
    getAllSuperAdmin, 
    createSuperAdmin, 
    updateSuperAdmin, 
    deleteSuperAdmin,
    loginSuperAdmin,
    logoutSuperAdmin,

}

