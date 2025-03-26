const express = require('express');
const router = express.Router();

const socialChannels = [
  {
    platform: 'Instagram',
    handle: '@gutguard',
    followers: 25000,
    description: 'Daily gut health tips and community stories'
  },
  {
    platform: 'Facebook',
    handle: 'GutGuardOfficial',
    followers: 40000,
    description: 'Community support and wellness resources'
  }
];

const referralProgram = {
  description: 'Earn rewards for sharing GutGuard with friends',
  benefits: [
    '20% off for every successful referral',
    'Bonus GutGuard points',
    'Exclusive community access'
  ]
};

router.get('/', (req, res) => {
  res.render('community', {
    title: 'GutGuard Community',
    social: socialChannels,
    referral: referralProgram
  });
});

router.get('/referral', (req, res) => {
  res.render('referral-program', {
    title: 'Referral Program',
    referral: referralProgram
  });
});

// Placeholder for user-generated content
router.get('/stories', (req, res) => {
  res.render('community-stories', {
    title: 'Community Stories',
    stories: [
      {
        author: 'Maria S.',
        story: 'How GutGuard transformed my digestive health...',
        date: '2024-03-15'
      }
    ]
  });
});

module.exports = router;