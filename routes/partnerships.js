const express = require('express');
const router = express.Router();

const partnerTypes = [
  {
    type: 'Healthcare Professionals',
    description: 'Special programs and resources for doctors, nutritionists, and wellness experts.',
    benefits: [
      'Exclusive wholesale pricing',
      'Patient education materials',
      'Continuing education resources'
    ]
  },
  {
    type: 'Distributors',
    description: 'Opportunities for bulk distribution and reselling of GutGuard products.',
    benefits: [
      'Competitive wholesale rates',
      'Marketing support',
      'First access to new product launches'
    ]
  }
];

router.get('/', (req, res) => {
  res.render('partnerships', {
    title: 'GutGuard Partnerships',
    partnerTypes: partnerTypes
  });
});

router.get('/apply', (req, res) => {
  res.render('partnership-application', {
    title: 'Partner Application'
  });
});

router.post('/apply', (req, res) => {
  const { 
    businessName, 
    contactName, 
    email, 
    partnerType, 
    additionalDetails 
  } = req.body;

  // Placeholder for application processing
  console.log('Partnership Application:', { 
    businessName, 
    contactName, 
    email, 
    partnerType, 
    additionalDetails 
  });

  res.render('application-success', {
    title: 'Application Received',
    message: 'Thank you for your partnership interest. We\'ll review your application soon.'
  });
});

module.exports = router;