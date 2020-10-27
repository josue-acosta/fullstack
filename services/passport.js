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
        async (accessToken, refreshToken, profile, done) => {
            // http://www.passportjs.org/docs/downloads/html/#strategies
            const existingUser = await User.findOne({ googleID: profile.id })

            if (existingUser) {
                done(null, existingUser)
            } else {
                const user = await new User({ googleID: profile.id }).save()
                done(null, user)
            }
        }
    )
);