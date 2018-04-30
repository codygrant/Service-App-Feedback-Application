const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1/mern-stack-app');
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

const app = express();

// add express object to routes
require('./routes/authRoutes')(app);

// for production deployment
const PORT = process.env.PORT || 5000;
app.listen(PORT);