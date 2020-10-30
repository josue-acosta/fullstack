const mongoose = require('mongoose');
const { Schema } = mongoose;

// Order Document Schema
const orderSchema = new Schema({
    orderNumber: { type: Number, min: 0 },
    name: { type: String, maxlength: 30 },
    phoneNumber: { type: String, maxlength: 10 },
    cakeSize: { type: String, maxlength: 30 },
    price: { type: Number, min: 0 },
    flavor1: { type: String, maxlength: 30 },
    flavor2: { type: String, maxlength: 30 },
    filling: { type: String, maxlength: 30 },
    salesCategory: { type: String, default: "cake" },
    dateTime: Date,
    decoration: { type: String, maxlength: 30 },
    printOut: Boolean,
    celebratedName: { type: String, maxlength: 30 },
    celebratedAge: { type: String, maxlength: 30 },
    celebratedText: { type: String, maxlength: 30 }
});

// Mongo Collection
mongoose.model('orders', orderSchema);