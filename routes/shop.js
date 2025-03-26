const express = require('express');
const router = express.Router();

// Sample product data (would typically come from a database)
const products = [
  {
    id: 'SynBIOTIC+',
    name: 'SynBIOTIC+ Probiotic',
    description: 'Advanced gut health supplement with multi-strain probiotics',
    price: 45.99,
    benefits: [
      'Supports digestive health',
      'Boosts immune system',
      'Improves nutrient absorption'
    ],
    ingredients: [
      'Lactobacillus acidophilus',
      'Bifidobacterium longum',
      'Saccharomyces boulardii'
    ],
    category: 'Probiotics'
  },
  // {
  //   id: 'GutGo-Flora',
  //   name: 'GutGo Flora',
  //   description: 'Specialized microbiome support for daily wellness',
  //   price: 39.99,
  //   benefits: [
  //     'Balances gut microbiome',
  //     'Reduces digestive discomfort',
  //     'Enhances mental clarity'
  //   ],
  //   ingredients: [
  //     'Prebiotic fiber',
  //     'Probiotics',
  //     'Digestive enzymes'
  //   ],
  //   category: 'Microbiome Support'
  // }
];

// Shop main page
router.get('/', (req, res) => {
  res.render('shop', { 
    title: 'Shop GutGuard Products', 
    products: products 
  });
});

// Product detail page
router.get('/product/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (product) {
    res.render('product-detail', { 
      title: product.name, 
      product: product 
    });
  } else {
    res.status(404).render('error', { 
      title: 'Product Not Found',
      message: 'The requested product could not be found.' 
    });
  }
});

// Cart functionality (basic placeholder)
router.get('/cart', (req, res) => {
  res.render('cart', { 
    title: 'Your GutGuard Cart',
    cartItems: [] // Placeholder for cart items
  });
});

module.exports = router;