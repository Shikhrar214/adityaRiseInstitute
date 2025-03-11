import mongoose, {Schema} from "mongoose"

const otpSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
      },
    otp:{
        type: String,
        required: true,
        min: 4,
        max: 6,
        index: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 600,
        required: true,
    }
})


export const Otp = mongoose.model("Otp", otpSchema);