const mongoose = require('mongoose');
// Define schema for the product
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    sizes: [{ type: String, required: true }],
    images: [{ type: String, required: true }],
    productInfo: {
      material: { type: String },
      features: { type: String },
      fitDescription: { type: String },
      additionalDetails: { type: String }
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

// Create a model based on the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
