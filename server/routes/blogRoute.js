// external import
const express = require('express');

// internal import
const { createBlog, getOneBlog, allBlogs } = require('../controllers/blogController');

const router = express.Router();

// create Blog post
router.post('/blogs/create', createBlog);

// find a Blog by userId
router.get('/blogs/:id', getOneBlog);

// find all Blog posts
router.get('/blogs', allBlogs);

module.exports = router;
