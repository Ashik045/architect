// internal import
const mongoose = require('mongoose');

const WorkSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        client: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        desc: {
            type: Array,
            required: true,
        },
    },
    { timestamps: true }
);

// create user model
const Work = mongoose.model('Work', WorkSchema);

module.exports = Work;
