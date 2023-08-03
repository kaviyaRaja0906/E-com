const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  id: { 
    type: Number,
    required: true 
},
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
  price: { 
    type: Number, 
    required: true 
},
  quantity: { 
    type: Number, 
    default: 1 
},
});

// Create a model based on the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
