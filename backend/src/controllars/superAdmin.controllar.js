import { superAdmin } from "../models/superAdmin.models.js";


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
        const {fullName,email, role, photo, mobileNumber, fullAddress, branchName, branchLocation, aadhar, password} = req.body;
        const newSuperAdmin = new superAdmin({fullName,email, role, photo, mobileNumber, fullAddress, branchName, branchLocation, aadhar, password});
        await newSuperAdmin.save();
        
        res.status(200).json({
            
            superAdmin: newSuperAdmin
        })
    } catch (error) {
        res.status(200).json(
            {
                sucess: false,
                message: error
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

// login super admin
// get user from ---> req.body;
// find the super admin
// password check 
// access and refresh token
// send cookies
const loginSuperAdmin = async (req, res) => {
    const {email, password} = req.body;

    if(!email) res.status(400).json({sucess: true, message: "email is required !"})

    const sAdmin = await superAdmin.findOne({email});

    if (!sAdmin) {
        res.status(400).json({
            success: false,
            message: "Super Admin is not found please use Valid email!"
        });
    };

    const isPassValid = await sAdmin.isPassCorrect(password);

    if(!isPassValid) {
        res.status(400).json({
            sucess: false,
            message: "please enter correct password!"
        })
    }

    const {accessToken, refreshToken} = await genrateAccessAndRefreshToken(sAdmin._id);

    const loggedInAdmin = await superAdmin.findById(sAdmin._id).select("-photo -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json({
        status: 200,
        admin: loggedInAdmin, accessToken, refreshToken,
        message: "Admin Loggedin Successfully!"
    })
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

