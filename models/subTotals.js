const mongoose = require('mongoose');
const { Schema } = mongoose;

// Edible Portion Cost Sub Total Document Schema
const ingredientsSchema = new Schema({
    recipe: { type: String, maxlength: 30 },
    recipeQuantity: { type: Number, min: 0 },
    costPerUnit: { type: Number, min: 0 },
    total: { type: Number, min: 0 }
});


// Edible Portion Cost Sub Total Document Schema
const subTotalSchema = new Schema({
    subTotal: { type: String, maxlength: 30 },
    ingredients: [ingredientsSchema],
});

module.exports = subTotalSchema;