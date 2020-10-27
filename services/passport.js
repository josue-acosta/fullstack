const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose')
const keys = require('../config/keys')

// Ensures we only bring in the model only once
const User = mongoose.model('users')

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: keys.googleCallbackURL
        },
        (accessToken, refreshToken, profile, done) => {
            new User({ googleID: profile.id }).save()
        }
    )
);