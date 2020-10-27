const mongoose = require('mongoose');
const { Schema } = mongoose;

// User Document Schema
const userSchema = new Schema({
    googleID: String
});

// Mongo Collection
mongoose.model('users', userSchema);