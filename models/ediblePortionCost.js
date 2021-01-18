const mongoose = require('mongoose');
const { Schema } = mongoose;

// Edible Portion Cost Document Schema
const ediblePortionCostSchema = new Schema({
    unitOfMeasurment: { type: String, maxlength: 30 },
    costPerUnit: { type: Number, min: 0 },
});

module.exports = ediblePortionCostSchema;