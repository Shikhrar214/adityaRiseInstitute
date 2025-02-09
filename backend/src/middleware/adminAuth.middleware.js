import jwt from 'jsonwebtoken'
import { superAdmin } from '../models/superAdmin.models'

export const verifyJWT = async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        if (!token) {
            res.status(400).json({
                message: "please login"
            })
        }
        const decoadedToken = jwt.verify(token, process.env.JWT_ACCESS_TOKEN)
        const admin = superAdmin.findById(decoadedToken?._id).select("-password -refreshToken")
        if (!admin) {
            res.status(400).json({message: "invalid user credencials"})
        }
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            error,
        })
    }
}














// const adminAuth = (req, res, next) => {
//     const token = req.headers["authorization"|| "Authorization"];
//     if (!token) {
//         return res.status(401).json({
//             message: "access denied"
//         })
//     }

//     try {
//         const decoade = jwt.verify(token, process.env.JWT_ACCESS_TOKEN)
//         req.user = decoade;
//         next();
//     } catch (error) {
//         res.status(403).json({
//             message: "invalid token"
//         })
//     }
// }

// export {adminAuth}