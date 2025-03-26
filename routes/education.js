const express = require('express');
const router = express.Router();

// Educational content
const educationalTopics = [
  {
    id: 'microbiome-101',
    title: 'Microbiome 101',
    shortDesc: 'Understanding the Basics of Gut Health',
    content: 'A comprehensive introduction to the gut microbiome and its crucial role in overall health.',
    readTime: '10 min',
    difficulty: 'Beginner'
  },
  {
    id: 'probiotics-explained',
    title: 'Probiotics Explained',
    shortDesc: 'How Pre, Pro, and Postbiotics Work',
    content: 'Deep dive into the different types of biotics and their functions in the human body.',
    readTime: '15 min',
    difficulty: 'Intermediate'
  }
];

const videoResources = [
  {
    id: 'gut-health-basics',
    title: 'Gut Health Basics',
    thumbnailUrl: '/images/gut-health-video-thumb.jpg',
    duration: '22:45',
    presenter: 'Dr. Elena Racasa'
  }
];

router.get('/', (req, res) => {
  res.render('education', {
    title: 'GutGuard Academy',
    topics: educationalTopics,
    videos: videoResources
  });
});

router.get('/topic/:id', (req, res) => {
  const topic = educationalTopics.find(t => t.id === req.params.id);
  if (topic) {
    res.render('education-detail', {
      title: topic.title,
      topic: topic
    });
  } else {
    res.status(404).render('error', {
      title: 'Topic Not Found',
      message: 'The requested educational topic could not be found.'
    });
  }
});

module.exports = router;