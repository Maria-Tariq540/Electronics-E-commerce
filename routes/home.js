const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  try {
    const featuredProducts = await Product.find({ isFeatured: true }).limit(6);
    const dealsProducts = await Product.find({ isDeals: true }).limit(5);
    const categories = ['Smartphones', 'Laptops', 'Smart TVs', 'Audio', 'Gaming', 'Smart Home', 'Accessories'];
    
    res.render('pages/home', {
      featuredProducts,
      dealsProducts,
      categories,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error loading homepage');
  }
});

module.exports = router;
