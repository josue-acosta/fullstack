const mongoose = require('mongoose');
const { Schema } = mongoose;
const recipientSchema = require('./recipient')

// Survey Document Schema
const surveySchema = new Schema({
    _user: { type: Schema.Types.ObjectId, ref: 'user' },
    title: String,
    subject: String,
    body: String,
    recipients: [recipientSchema],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    dateSent: Date,
    lastResponded: Date
});

// Mongo Collection
mongoose.model('surveys', surveySchema);