const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Import route modules
const indexRoutes = require('./routes/index');
const shopRoutes = require('./routes/shop');
const scienceRoutes = require('./routes/science');
const educationRoutes = require('./routes/education');
const accountRoutes = require('./routes/account');
const supportRoutes = require('./routes/support');
const partnershipsRoutes = require('./routes/partnerships');
const aboutRoutes = require('./routes/about');
const communityRoutes = require('./routes/community');
const cartRoutes = require('./routes/cart');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRoutes);
app.use('/shop', shopRoutes);
app.use('/science', scienceRoutes);
app.use('/education', educationRoutes);
app.use('/account', accountRoutes);
app.use('/support', supportRoutes);
app.use('/partnerships', partnershipsRoutes);
app.use('/about', aboutRoutes);
app.use('/community', communityRoutes);
app.use('/cart', cartRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { 
    title: 'Error', 
    message: 'Something went wrong!' 
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`GutGuard website running on port ${PORT}`);
});

module.exports = app;