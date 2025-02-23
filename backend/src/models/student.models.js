import mongoose, {Schema} from "mongoose";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";


const studentSchema = new Schema (
    {

        ID: {
            type: String,
            required: true
        },
        fullName: {
            type: String,
            required: true,
            min: 3,
            max: 30,
            index: true,
        },
        fatherName: {
            type: String,
            required: true,
            min: 3,
            max: 30,
            index: true,
        },
        motherName: {
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
        dob: {
            type: Date,
            required: true,
            index: true,
        },
        role: {
            type: String,
            default: "student",
            required: true
        },
        gender: {
            type: String,
            required: true,
            index: true,
        },
        course: {
            type: String,
            required: true,
            min: 3,
            max: 30,
            index: true,
        },
        category: {
            type: String,
            required: true,
            min: 3,
            max: 30,
            index: true,
        },
        address: {
            type: String,
            required: true,
            min: 3,
            max: 50,
            index: true,
        },
        post: {
            type: String,
            required: true,
            min: 3,
            max: 30,
            index: true,
        },
        district: {
            type: String,
            required: true,
            min: 3,
            max: 30,
            index: true,
        },
        state: {
            type: String,
            required: true,
            min: 3,
            max: 30,
            index: true,
        },
        pincode: {
            type: Number,
            match: /^[0-9]{6}$/,
            required: true,
            index: true,
        },
        mobile: {
            type: Number,
            match: /^[0-9]{10}$/,
            required: true,
            index: true,
            unique: true
        },
        aadhar: {
            type: Number,
            match: /^[0-9]{12}$/,
            unique: true,
            required: true,
            index: true,
        },
        photo: {
            type: String,
            index: true,
            required: true
        },
        signature: {
            type: String,
            index: true,
            required: true,
        },
        password: {
            type: String,
            index: true,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

// pass incription
studentSchema.pre("save", async function(next){
    if (!this.isModified("password")) return next;
    this.password = await bcrypt.hash(this.password, 15)
    next()
})

// password validation
studentSchema.methods.isPassCorrect = async function(password) {
    return await bcrypt.compare(password, this.password)
}


// genrate Access token
studentSchema.methods.genrateAccessToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
            role: this.role,
            email: this.email,
            fullName: this.fullName,
        },
        process.env.JWT_ACCESS_TOKEN,
        {
            expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRY
        }
    )
}

// genrate refresh token
studentSchema.methods.genrateRefreshToken = async function () {
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
export const student = mongoose.model("student", studentSchema);