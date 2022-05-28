/* eslint-disable no-unused-vars */
// enternal import
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

// external import
const authRoute = require('./routes/authRoute');
const worksRoute = require('./routes/worksRoute');
const blogRoute = require('./routes/blogRoute');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

// database connection
mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => {
        console.log('database connection successfull.');
    })
    .catch((err) => {
        console.log(err);
    });

// home route
app.get('/api', (req, res) => {
    res.status(200).json({
        message: 'server running.',
    });
});

// application routing
app.use('/api', authRoute);
app.use('/api', worksRoute);
app.use('/api', blogRoute);

// not found handler
app.use((req, res, next) => {
    res.status(404).json({
        error: 'Requested url not found!',
    });
});

// error handling
// eslint-disable-next-line consistent-return
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({
        error: err,
    });
});

const port = process.env.PORT || 5000;
const host = process.env.HOST || '0.0.0.0';

// server connection port
app.listen(port, host, () => {
    console.log(`connected on ${process.env.PORT} port`);
});
