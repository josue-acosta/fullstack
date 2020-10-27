const express = require('express');
const userModel = require('./models/user');
const cookieSession = require('cookie-session');
const passport = require('passport');
const passportConfig = require('./services/passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');

// app configuration
const app = express();

// passport configuration
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

// database configuration
mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

// auth routes
require('./routes/authRoutes')(app)



// run app
const PORT = process.env.PORT || 5000;
app.listen(PORT);