const express = require('express');
require('./services/passport');

const app = express();

// add express object to routes
require('./routes/authRoutes')(app);

// for production deployment
const PORT = process.env.PORT || 5000;
app.listen(PORT);