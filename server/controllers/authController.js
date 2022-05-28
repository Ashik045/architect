/* eslint-disable prettier/prettier */
/* eslint-disable no-underscore-dangle */
// external import
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// internal import
const User = require('../models/user');

// create user
const signIn = async (req, res) => {
    try {
        const password = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            ...req.body,
            password,
        });
        await newUser.save();

        res.status(200).json({
            message: 'Sign up successfully.',
        });
    } catch (error) {
        res.status(500).json({
            error: 'Can not create a user!',
        });
    }
};

// login a user
const logIn = async (req, res) => {
    try {
        const isUser = await User.find({ email: req.body.email });
        if (isUser) {
            const isCorrectPass = await bcrypt.compare(req.body.password, isUser[0].password);

            if (isCorrectPass) {
                const token = jwt.sign(
                    {
                        userId: isUser[0]._id,
                        username: isUser[0].username,
                        useremail: isUser[0].email,
                    },
                    process.env.JWT_SECRET,
                    { expiresIn: '2d' },
                );

                res.status(200).json({
                    message: isUser,
                    token,
                });
            } else {
                res.status(500).json({
                    error: 'Authentication failed!',
                });
            }
        } else {
            res.status(500).json({
                error: 'Authentication failed!',
            });
        }
    } catch (error) {
        res.status(500).json({
            error: 'Authentication failed!',
        });
    }
};

module.exports = {
    signIn,
    logIn,
};
