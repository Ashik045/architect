/* eslint-disable no-underscore-dangle */
// external import

// internal import
const Work = require('../models/works');

// create user
const createWork = async (req, res) => {
    try {
        const newWork = new Work(req.body);
        await newWork.save();

        res.status(200).json({
            message: 'Work post created successfully.',
        });
    } catch (error) {
        res.status(500).json({
            error: 'Can not create work post!',
        });
    }
};

// get a user by userId
const getOneWork = async (req, res) => {
    try {
        const singleWork = await Work.findById({ _id: req.params.id });

        res.status(200).json({
            message: singleWork,
        });
    } catch (error) {
        res.status(500).json({
            error: 'Can not find work post',
        });
    }
};

const allWorks = async (req, res) => {
    try {
        const category = req.query.cat;
        let workPosts;
        if (category) {
            workPosts = await Work.find({
                category: {
                    $in: [category],
                },
            });
        } else {
            workPosts = await Work.find();
        }

        res.status(200).json({
            message: workPosts,
        });
    } catch (error) {
        res.status(500).json({
            error: 'Can not find any work post',
        });
    }
};

// login a user
module.exports = {
    createWork,
    getOneWork,
    allWorks,
};
