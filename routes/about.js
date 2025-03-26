const express = require('express');
const router = express.Router();

const companyInfo = {
  mission: 'Advancing gut wellness through cutting-edge probiotic and postbiotic research.',
  vision: 'To be the global leader in microbiome health solutions.',
  foundedYear: 2020,
  headquarters: 'Manila, Philippines'
};

const teamMembers = [
  {
    name: 'Dr. Elena Racasa',
    role: 'Founder & Chief Scientific Officer',
    bio: 'Pioneering researcher in microbiome health with over 15 years of scientific expertise.'
  },
  {
    name: 'Miguel Santos',
    role: 'CEO',
    bio: 'Entrepreneur passionate about transforming healthcare through innovative solutions.'
  }
];

const sustainabilityEfforts = [
  {
    initiative: 'Eco-Friendly Packaging',
    description: 'Using 100% biodegradable and recyclable packaging materials.'
  },
  {
    initiative: 'Ethical Sourcing',
    description: 'Partnering with sustainable, local suppliers who share our environmental values.'
  }
];

router.get('/', (req, res) => {
  res.render('about', {
    title: 'About GutGuard',
    company: companyInfo,
    team: teamMembers,
    sustainability: sustainabilityEfforts
  });
});

router.get('/our-story', (req, res) => {
  res.render('our-story', {
    title: 'Our Story',
    milestones: [
      { year: 2020, event: 'GutGuard Founded' },
      { year: 2021, event: 'First Probiotic Formulation Developed' },
      { year: 2022, event: 'Launched First Consumer Products' }
    ]
  });
});

module.exports = router;