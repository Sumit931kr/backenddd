import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    star: String,
    comment: String,
    date : {
        type : Date,
        default : new Date()
    },
})

const review = new mongoose.model("review", reviewSchema);

export default review;