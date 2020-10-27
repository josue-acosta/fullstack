const express = require('express');
const userModel = require('./models/user')
const passportConfig = require('./services/passport');
const mongoose = require('mongoose')
const keys = require('./config/keys')

// app configuration
const app = express();

// database configuration
mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

// auth routes
require('./routes/authRoutes')(app)



// run app
const PORT = process.env.PORT || 5000;
app.listen(PORT);