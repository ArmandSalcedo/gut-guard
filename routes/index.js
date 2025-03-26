const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
  res.render('index', { 
    title: 'GutGuard - Gut Health Pioneers',
    heroTitle: 'Your Gut, Your Guard, Your Life',
    heroSubtitle: 'Start Your Gut Health Journey',
    images: [
      'images/product-image-1.jpg',
      'images/product-image-2.jpg',
      'images/product-image-3.jpg',
      'images/product-image-4.jpg'
    ],
    featuredProducts: [
      {
        name: 'SynBIOTIC+',
        shortDesc: 'Advanced Probiotic Formula',
        icon: '/images/synbiotic-icon.png'
      },
      // {
      //   name: 'GutGo Flora',
      //   shortDesc: 'Microbiome Support',
      //   icon: '/images/gutgo-icon.png'
      // }
    ],
    keyHighlights: [
      'Clinically Proven Formulations',
      'Sustainable Sourcing',
      'Holistic Gut Health Approach'
    ],
  });
});

module.exports = router;