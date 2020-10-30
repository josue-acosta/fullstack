const mongoose = require('mongoose');
const { Schema } = mongoose;

// orderNumber Document Schema
const orderNumberSchema = new Schema({
    orderNumber: { type: Number, min: 0 }
});

// Mongo Collection
mongoose.model('orderNumber', orderNumberSchema);