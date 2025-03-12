import { Otp } from '../models/otp.model.js';
import { Owner } from '../models/owner.models.js'
import { student } from '../models/student.models.js';
import { superAdmin } from '../models/superAdmin.models.js';
import bcrypt from 'bcrypt'

const genrateAccessAndRefreshToken = async (id) => {
    try {
        const owner = await Owner.findById(id).select("-password")
        
        const accessToken = owner.genrateAccessToken()
        const refreshToken = owner.genrateRefreshToken()
    
        owner.refreshToken = refreshToken
        await owner.save({validateBeforeSave: false})

        return {accessToken, refreshToken}

    } catch (error) {
            return error
    }
}

const registerOwner = async (req, res) => {
    try {
        const {fullName, email, role, mobileNumber, fullAddress, branchName, branchLocation, password} = req.body;
        if ([ fullName, email, role, mobileNumber, fullAddress, branchName, branchLocation, password].some((feilds)=>feilds.trim() === "")) {
            return res.status(400).json({
                message: "all feilds are required",
            })
        }
        
        const newOwner = new Owner({fullName, email, role, mobileNumber, fullAddress, branchName, branchLocation, password})

        const savedOwner = await newOwner.save()


        res.status(200).json({
            message: "completed",
        })

    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            error,
        })
    }
}


const getAllOwners = async (req, res) => {
    try {

        const allOwners = await Owner.find()

        if (!allOwners) {
            return res.status(400).json({
                message: "registerd admin not found"
            })
        }

        console.log(allOwners);
        

        res.status(200).json({
            success: true,
            message: "all owners got successfully",
            owner: allOwners,

        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            error: `${error}`,
        }) 
    }
}


const getAllAdmins = async (req, res) => {
    try {
        const allAdmin = await superAdmin.find()

        if (!allAdmin) {
            return res.status(400).json({
                message: "admin is not there"
            })
        }
        res.status(200).json({
            success: true,
            Admin: allAdmin,
            message: "all admins got successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            error: `${error}`,
        })
    }
}

const getAllStudents = async (req, res) => {
    try {

        const allStudents = await student.find()
        if (!allStudents) {
            return res.status(400).json({
                success: false,
               
                message: "students not found"
            })
        }
        res.status(200).json({
            success: true,
            allStudents,
            message: "all students got successsfully"
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            error: `${error}`,
        })
    }
}

const blockAdmin = async (req, res) => {
    try {
        const {id} = req.params;
        if(!id) return res.status(400).json({message: "Id not found"})
        
        const blockedAdmin = superAdmin.findByIdAndUpdate(id, {blocked: true}, {new: true})
        res.status(200).json({
            message: "admin blocked successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error while blocking",
            error,
        })
    }
}

const unBlockAdmin = async (req, res) => {
    try {
        const {id} = req.params;
        if(!id) return res.status(400).json({message: "Id not found"})
        
        const unBlockedAdmin = superAdmin.findByIdAndUpdate(id, {blocked: false}, {new: true})
        res.status(200).json({
            message: "admin blocked successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error while blocking",
            error,
        })
    }
}

const verifyAdmin = async (req, res) => {
    try {
        const {id} = req.params;
        if (!id) return res.status(400).json({message: "unauthorised request"})
        const verifiedAdmin = await superAdmin.findByIdAndUpdate(id, {approved: true}, {new: true} ).select("-password -refreshToken")
        if(!verifiedAdmin) return res.status(400).json({message: "unauthorised request || admin is not available"})
        
            return res.status(200).json({
                success: true,
                verifiedAdmin,
            })
    } catch (error) {
        return res.status(500).json({
            message: "internal server error while verifying",
            error,
        })
    }
}

// options
const options = {
    httpOnly: true,
    secure: true,
    sameSite: "None"
}

const login = async (req, res) => {
    try {
       
        
        const {email, password} = req.body;
        if (!email && !password) return res.status(400).json({
            message: "Invalid credencials"
        })
        
        const owner = await Owner.findOne({email})
        if (!owner) return res.status(400).json({message: "not authorised user"})
     
            console.log(owner);
            
        const matchPass = await bcrypt.compare(password, owner.password)
       
        
        if(!matchPass) return res.status(400).json({message: "incorrect password"})
       
        const id = owner._id 
        console.log("qwner = ", id);
        
        const {accessToken, refreshToken} = await genrateAccessAndRefreshToken(id)
        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json({
            message: "login successfull",
            
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            error: `${error}`,
        })
    }
}

const logOut = async (req, res) => {
    try {
        const id = req.owner._id

        console.log("id", id);
        if (!id) return res.status(400).json({message: "invalid request"})
        const owner = Owner.findByIdAndUpdate(id, {refreshToken: undefined}, {new: true})
        

        
        res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json({
            message: "logout successfull",
            
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            error,
        })
    }
}

const resetPassword = async(req, res) => {
    try {
        const {email, newPassword, otp} = req.body;
        if (!email && !newPassword &&! otp) {
            return res.status(400).json("all feilds are required ")
        }
        const responceOwner = await Otp.findOne({otp})
        if (!responceOwner) {
            return res.status(400).json("some error occurred please try again")
        }
        const owner = await Owner.findOne({email});
        if (!owner) {
            return res.status(400).json("unauthorised request")
        }

        res.status(200).json({
            responceOwner,
            email,
            newPassword,
            otp
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            error: `${error}`,
        })
    }
}



export {
    registerOwner,
    getAllOwners,
    getAllAdmins,
    getAllStudents,
    blockAdmin,
    unBlockAdmin,
    verifyAdmin,
    login,
    logOut,
    resetPassword,
}