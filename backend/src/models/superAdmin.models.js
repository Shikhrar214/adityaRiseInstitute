import mongoose, {Schema} from 'mongoose'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const superAdminSchema = new Schema (
    {
        fullName: {
            type: String,
            required: true,
            min: 3,
            max: 30,
            index: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            unique: true,
            max: 50
        },
        role: {
            type: String,
            enum: ["superadmin", "Admin", "admin", "superAdmin" ], 
            required: true
        },
        photo: {
            type: String,  //cloudinery service
            required: true
        },
        mobileNumber: {
            type: Number,
            match: /^[0-9]{10}$/,
            required: [true, "please enter correct mobile number"]
        },
        fullAddress: {
            type: String,
            required: true,
            trim: true,
            index: true,
            max: 50
        },
        branchName: {
            type: String,
            required: true,
            trim: true, 
            index: true,
            max: 50
        },
        branchLocation: {
            type: String,
            required: true,
            index: true,
            max: 50
        },
        aadhar: {
            type: Number,
            match: /^[0-9]{12}$/,
            unique: true,
            required: [true, "enter correct aadhar number"]
        },
        password: {
            type: String,
            required: true,
            min: 3,
            max: 30,
        },
        refreshToken: {
            type: String
        }
    },
    {
        timestamps: true
    }
)


// password incryption
superAdminSchema.pre("save",async function(next){
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 15);
    next();
})


// password validation
superAdminSchema.methods.isPassCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}


// genrate Access And Refresh Token
superAdminSchema.methods.genrateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            fullName: this.fullName
        },
        process.env.JWT_ACCESS_TOKEN,
        {
            expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRY
        }
    )
}


superAdminSchema.methods.genrateRefreshToken = function (){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.JWT_REFRESH_TOKEN,
        {
            expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRY
        }
    )
}
export const superAdmin = mongoose.model("superAdmin", superAdminSchema)