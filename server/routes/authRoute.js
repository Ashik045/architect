// external import
const express = require('express');

// internal import
const { signIn, logIn } = require('../controllers/authController');
const { addUservalidator, userValidationHandler } = require('../middlewares/authvalidator');

const router = express.Router();

// create user
router.post('/auth/signup', addUservalidator, userValidationHandler, signIn);

// login user
router.post('/auth/login', logIn);

module.exports = router;
