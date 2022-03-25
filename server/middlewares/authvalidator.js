// external import
const { check, validationResult } = require('express-validator');
const createError = require('http-errors');

// internal import
const User = require('../models/user');

const addUservalidator = [
    check('username').isLength({ min: 1 }).withMessage('username is required!').trim(),
    check('fullname').isLength({ min: 1 }).withMessage('fullname is required!'),
    check('email')
        .isEmail()
        .withMessage('Invalid email address!')
        .trim()
        .custom(async (value) => {
            try {
                const user = await User.findOne({ email: value });
                if (user) {
                    throw createError('Email already in use!');
                }
            } catch (error) {
                throw createError(error);
            }
        }),
    check('password').isLength({ min: 1 }).withMessage('password is required!'),
];

const userValidationHandler = (req, res, next) => {
    const errors = validationResult(req);
    const mappedErrors = errors.mapped();

    if (Object.keys(mappedErrors).length === 0) {
        next();
    } else {
        res.status(500).json({
            error: mappedErrors,
        });
    }
};

module.exports = { addUservalidator, userValidationHandler };
