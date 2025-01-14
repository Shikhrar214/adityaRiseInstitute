import mongoose, {Schema} from "mongoose";


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
        dob: {
            type: Date,
            required: true,
            index: true,
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





export const student = mongoose.model("student", studentSchema);