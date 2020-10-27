const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose')
const keys = require('../config/keys')

// Ensures we only bring in the model only once
const User = mongoose.model('users')


// set the user info into a cookie
passport.serializeUser((user, done) => {
    done(null, user.id)
})

// set the cookie into a mongoose model
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user)
        })
})

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({ googleID: profile.id })
                .then((existingUser) => {
                    if (existingUser) {
                        console.log("Found user")
                        done(null, existingUser)
                    } else {
                        new User({ googleID: profile.id })
                            .save()
                            .then(user => done(null, user))
                    }
                })
        }
    )
);