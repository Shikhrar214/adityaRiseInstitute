import jwt from 'jsonwebtoken'
import { superAdmin } from '../models/superAdmin.models.js'
import {Owner} from '../models/owner.models.js'
import {student} from '../models/student.models.js'

export const verifyJWTAdmin = async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        if (!token) {
            return res.status(400).json({
                message: "please login"
            })
        }
        
        
        const decoadedToken =  jwt.verify(token, process.env.JWT_ACCESS_TOKEN)

        if (!decoadedToken) {
            return res.status(500).json({
                message: "internal server error"
            })
        }
       
        
        const admin = await superAdmin.findById({_id: decoadedToken?._id}).select("-password -refreshToken")

        if (!admin) {
            return res.status(400).json({message: "invalid user credencials"})
        }
        

        // role 
        const roleAuth = decoadedToken.role === admin.role
        if (!roleAuth)  return res.status(400).json({
            message: "not authenticated user"
        })
       
        req.admin = admin;
        
        
        next()
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            error,
        })
    }
}

export const verifyJWTOwner = async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        if (!token) {
            return res.status(400).json({
                message: "please login"
            })
        }
        const decoadedToken = jwt.verify(token, process.env.JWT_ACCESS_TOKEN)
        const owner = await Owner.findById(decoadedToken._id)

        if (!owner) {
            return res.status(400).json({message: "invalid user credencials"})
        }

        // check role
        const role = owner.role
        if(role != "owner") return res.status(400).json({message: "invalid argument"})
        
        req.owner = owner;
        next()
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            error,
        })
    }
}

export const verifyJWTStudent = async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        if (!token) {
            return res.status(400).json({
                message: "please login"
            })
        }
        const decoadedToken = jwt.verify(token, process.env.JWT_ACCESS_TOKEN)
        if (!decoadedToken) {
            return res.status(500).json({
                message: "internal server error"
            })
        }
        const id = decoadedToken._id
        
        
        const studentRes = await student.findById({_id: id}).select("-password -refreshToken")
        
        
        if (!studentRes) {
            return res.status(400).json({message: "invalid user credencials"})
        }

        const roleAuth = decoadedToken.role === studentRes.role
        if(!roleAuth) return res.status(400).json({
            message: "invalid argument"
        })

        req.student = studentRes
   
        
        next()
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            error,
        })
    }
}
