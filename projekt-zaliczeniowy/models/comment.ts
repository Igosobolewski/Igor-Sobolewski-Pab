import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    topic: {
        required: true,
        type: String
    },
    description: {
        type: String
    },
})

module.exports = mongoose.model('Comment', commentSchema);