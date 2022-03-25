/* eslint-disable no-underscore-dangle */
// external import

// internal import
const Blog = require('../models/blog');

// create user
const createBlog = async (req, res) => {
    try {
        const newBlog = new Blog(req.body);
        await newBlog.save();

        res.status(200).json({
            message: 'Blog post created successfully.',
        });
    } catch (error) {
        res.status(500).json({
            error: 'Can not create Blog post!',
        });
    }
};

// get a user by userId
const getOneBlog = async (req, res) => {
    try {
        const singleBlog = await Blog.findById({ _id: req.params.id });

        res.status(200).json({
            message: singleBlog,
        });
    } catch (error) {
        res.status(500).json({
            error: 'Can not find Blog post',
        });
    }
};

const allBlogs = async (req, res) => {
    try {
        const BlogPosts = await Blog.find();

        res.status(200).json({
            message: BlogPosts,
        });
    } catch (error) {
        res.status(500).json({
            error: 'Can not find any Blog post',
        });
    }
};

// login a user
module.exports = {
    createBlog,
    getOneBlog,
    allBlogs,
};
