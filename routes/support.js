const express = require('express');
const router = express.Router();

const faqs = [
  {
    category: 'Orders',
    questions: [
      {
        question: 'How long does shipping take?',
        answer: 'Shipping within the Philippines typically takes 3-5 business days.'
      },
      {
        question: 'What is your return policy?',
        answer: 'We offer a 30-day money-back guarantee on all unopened products.'
      }
    ]
  },
  {
    category: 'Products',
    questions: [
      {
        question: 'Are your products vegan?',
        answer: 'Most of our products are vegan. Please check individual product details.'
      }
    ]
  }
];

const contactInfo = {
  email: 'support@gutguard.com',
  phone: '+63 (2) 8123-4567',
  hours: 'Monday-Friday, 9am-5pm PHT'
};

router.get('/', (req, res) => {
  res.render('support', {
    title: 'GutGuard Customer Support',
    faqs: faqs,
    contact: contactInfo
  });
});

router.get('/track-order', (req, res) => {
  res.render('order-tracking', {
    title: 'Track Your Order'
  });
});

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Placeholder for sending contact form (would typically send an email)
  console.log('Contact Form Submission:', { name, email, message });
  
  res.render('contact-success', {
    title: 'Message Sent',
    message: 'We\'ll get back to you soon!'
  });
});

module.exports = router;