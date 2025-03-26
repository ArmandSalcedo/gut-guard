const express = require('express');
const router = express.Router();

// Placeholder for authentication (would typically use passport or similar)
const users = [];

router.get('/login', (req, res) => {
  res.render('login', { 
    title: 'Login to GutGuard',
    error: null 
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Placeholder authentication logic
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    // In a real app, you'd use session or JWT
    res.redirect('/account/dashboard');
  } else {
    res.render('login', {
      title: 'Login to GutGuard',
      error: 'Invalid email or password'
    });
  }
});

router.get('/register', (req, res) => {
  res.render('register', { 
    title: 'Create GutGuard Account',
    error: null 
  });
});

router.post('/register', (req, res) => {
  const { email, password, name } = req.body;
  
  // Basic validation
  if (!email || !password || !name) {
    return res.render('register', {
      title: 'Create GutGuard Account',
      error: 'All fields are required'
    });
  }

  // Check if user already exists
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.render('register', {
      title: 'Create GutGuard Account',
      error: 'Email already in use'
    });
  }

  // Create user (in a real app, hash the password)
  const newUser = { email, password, name };
  users.push(newUser);

  res.redirect('/account/login');
});

router.get('/dashboard', (req, res) => {
  // In a real app, this would check authentication
  res.render('dashboard', {
    title: 'My GutGuard',
    user: {
      name: 'John Doe',
      email: 'john@example.com',
      subscriptions: [
        {
          product: 'SynBIOTIC+',
          nextDelivery: '2024-06-15'
        }
      ]
    }
  });
});

module.exports = router;