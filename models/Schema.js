// schema.js

const mongoose = require('mongoose');

// Define schema for Product_Category
const productCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  dateCreated: { type: Date, default: Date.now }
});

// Define schema for Product
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Product_Category' }
});

// Create models
const Product_Category = mongoose.model('Product_Category', productCategorySchema);
const Product = mongoose.model('Product', productSchema);

// Export models
module.exports = { Product_Category, Product };