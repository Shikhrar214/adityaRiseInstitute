import mongoose, {Schema} from "mongoose";


const coursesSchema = new Schema({
    thumbnail: {
        type: String,
        required: true,
        index: true,
        min: 3,
        max: 30
    },
    tutor: {
        type: String,
        required: true,
        index: true,
        min: 3,
        max: 30
    },
    price: {
        type: String,
        required: true,
        index: true,
        min: 3,
        max: 30
    },
    discountedPrice: {
        type: String,
        required: true,
        index: true,
        min: 3,
        max: 30
    },
    message: {
        type: String,
        required: true,
        index: true,
        min: 3,
        max: 30
    },
    lastDate: {
        type: String,
        required: true,
        index: true,
        min: 3,
        max: 30
    },
    nextBatchDate: {
        type: String,
        required: true,
        index: true,
        min: 3,
        max: 30
    },
    discription: {
        type: String,
        required: true,
        index: true,
        min: 3,
        max: 30
    },
    
},{timestamps: true})

export const Course = mongoose.model("Course", coursesSchema)