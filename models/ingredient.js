const mongoose = require('mongoose');
const { Schema } = mongoose;
const ediblePortionCostSchema = require('./ediblePortionCost')

// Ingredient Document Schema
const ingredientSchema = new Schema({
    ingredient: { type: String, maxlength: 30 },
    supplier: { type: String, maxlength: 30 },
    brand: { type: String, maxlength: 30 },
    asPurchasedCost: { type: Number, min: 0 },
    numberOfPackages: { type: Number, min: 0 },
    amountPerPackage: { type: Number, min: 0 },
    amountPerPackageUnit: { type: String, maxlength: 30 },
    yieldPercent: { type: Number, default: 100 },
    caseAmount: { type: Number, min: 0 },
    caseAmountUnit: { type: String, maxlength: 30 },
    totalCaseAmount: { type: String, maxlength: 30 },
    ediblePortionCost: [ediblePortionCostSchema]
});

// Mongo Collection
mongoose.model('ingredients', ingredientSchema);