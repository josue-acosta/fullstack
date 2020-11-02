const mongoose = require('mongoose');
const { Schema } = mongoose;

// Global Document Schema
const GlobalSchema = new Schema({
    count: { type: Number, min: 0 }
});

// Mongo Collection
mongoose.model('global', GlobalSchema);