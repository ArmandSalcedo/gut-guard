const express = require('express');
const router = express.Router();

// Sample research data
const researchStudies = [
  {
    id: 'gut-brain-connection',
    title: 'The Gut-Brain Connection',
    author: 'Dr. Elena Racasa',
    year: 2023,
    summary: 'Exploring the intricate relationship between gut microbiome and mental health.',
    fullPaperUrl: '/research/gut-brain-connection.pdf'
  },
  {
    id: 'probiotic-immunity',
    title: 'Probiotics and Immune System Modulation',
    author: 'GutGuard Research Team',
    year: 2022,
    summary: 'Comprehensive study on how probiotics enhance immune response.',
    fullPaperUrl: '/research/probiotic-immunity.pdf'
  }
];

const scientistProfiles = [
  {
    name: 'Dr. Elena Racasa',
    title: 'Chief Scientific Officer',
    expertise: 'Microbiome Research, Nutritional Science',
    bio: 'Leading expert in gut health with over 15 years of research experience.'
  }
];

router.get('/', (req, res) => {
  res.render('science', {
    title: 'Scientific Research & Innovation',
    researchStudies: researchStudies,
    scientists: scientistProfiles
  });
});

router.get('/study/:id', (req, res) => {
  const study = researchStudies.find(s => s.id === req.params.id);
  if (study) {
    res.render('research-detail', {
      title: study.title,
      study: study
    });
  } else {
    res.status(404).render('error', {
      title: 'Study Not Found',
      message: 'The requested research study could not be found.'
    });
  }
});

module.exports = router;