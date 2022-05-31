import mongoose from 'mongoose';


const articleSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    markdown: {
        type: String,
    
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Article', articleSchema);