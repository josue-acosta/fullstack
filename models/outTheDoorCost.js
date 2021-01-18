const mongoose = require('mongoose');
const { Schema } = mongoose;
const subTotalsSchema = require('./subTotals')

// Out The Door Document Schema
const outTheDoorCostSchema = new Schema({
    costPerItem: { type: String, maxlength: 30 },
    costWithCarrier: { type: String, maxlength: 10 },
    costWithContainer: { type: String, maxlength: 30 },
    sellingPrice: { type: Number, min: 0 },
    foodCostPercent: { type: String, maxlength: 30 },
    subTotals: [subTotalsSchema]
});

// Mongo Collection
mongoose.model('outTheDoorCosts', outTheDoorCostSchema);