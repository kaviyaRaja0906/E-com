const express = require('express');
const router = express.Router();
const Product = require('./products');

// Get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.setHeader('Cache-Control', 'no-cache');
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a specific product by its ID
router.get('/products/:id', async (req, res) => {
  try {
    res.setHeader('Cache-Control', 'no-cache');
    const productId = parseInt(req.params.id);
    const product = await Product.findOne({ id: productId });

    if (!product) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
