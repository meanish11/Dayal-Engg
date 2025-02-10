// models/product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  material: {
    type: String,
    required: true
  },
  availability: {
    type: String,
    default: 'In Stock'
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);