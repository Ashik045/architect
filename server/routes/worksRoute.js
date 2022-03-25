// external import
const express = require('express');

// internal import
const { createWork, getOneWork, allWorks } = require('../controllers/worksController');

const router = express.Router();

// create work post
router.post('/works/create', createWork);

// find a work by userId
router.get('/works/:id', getOneWork);

// find all work posts
router.get('/works', allWorks);

module.exports = router;
