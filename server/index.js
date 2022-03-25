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
// server connection port
app.listen(process.env.APP_CONNECTION_PORT || 4000, () => {
    console.log(`connected on ${process.env.APP_CONNECTION_PORT} port`);
});
