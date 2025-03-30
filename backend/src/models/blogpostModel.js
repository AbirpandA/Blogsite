const mongoose = require('mongoose');
const { Schema } = mongoose;
const User = require('./userModel')

const CommentSchema = new Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const BlogPostSchema = new Schema({
    title: { type: String, required: true }, 
    img: { type: String }, 
    content: { type: String, required: true },
    author: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
    },
    tags: {
        type: [String],
        lowercase: true,
        set: tags => tags.map(tag => tag.trim()).filter(tag => tag !== '')
    },  
    comments: [CommentSchema],
    likes:Number,
    createdAt: { type: Date, default: Date.now } 
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);
