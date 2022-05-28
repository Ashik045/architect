// internal import
const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        desc1: {
            type: String,
            required: true,
        },
        desc2: {
            type: String,
            required: true,
        },
        desc3quote: {
            type: String,
            required: true,
        },
        desc3: {
            type: String,
            required: true,
        },
        features: {
            type: Array,
            required: true,
        },
    },
    { timestamps: true }
);

// create user model
const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
