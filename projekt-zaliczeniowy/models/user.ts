import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    surname: {
        required: true,
        type: String
    },
    email: {
        type: String
    },
    
})

module.exports = mongoose.model('User', userSchema);