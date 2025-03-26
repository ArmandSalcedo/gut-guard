const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
  res.render('index', { 
    title: 'GutGuard - Gut Health Pioneers',
    heroTitle: 'Your Gut, Your Guard, Your Life',
    heroSubtitle: 'GutGuard is the first Triple-Action Gut health Formula (Pre-Pro-Post Biotics) in the Philippines backed by doctors & 15 years of scientific research. Trusted for gut health, immunity, and anti-aging.',
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
    ]
  });
});

module.exports = router;