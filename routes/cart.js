const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET cart page
router.get('/', (req, res) => {
    res.render('cart', { 
        title: 'Shop GutGuard Products'
    });
    try {
        // In a real application, you'd fetch cart items from the user's session or database
        const cartItems = Product.find({ inCart: true });
        
        const subtotal = cartItems.reduce((total, item) => 
            total + (item.price * item.quantity), 0);
        const tax = subtotal * 0.1;
        const total = subtotal + tax;

        res.render('cart', {
            title: 'Your Cart - GutGuard',
            cartItems: cartItems,
            subtotal: subtotal.toFixed(2),
            tax: tax.toFixed(2),
            total: total.toFixed(2)
        });
    } catch (error) {
        console.error('Cart Rendering Error:', error);
        res.status(500).render('error', { 
            title: 'Error', 
            message: 'Unable to load cart' 
        });
    }
});

// Add product to cart
router.post('/add/:productId', (req, res) => {
    try {
        const productId = req.params.productId;
        const product = Product.findById(productId);
        
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Logic to add to cart (could be session-based or database-stored)
        product.inCart = true;
        product.quantity = (product.quantity || 0) + 1;
        product.save();

        res.redirect('/cart');
    } catch (error) {
        console.error('Add to Cart Error:', error);
        res.status(500).json({ message: 'Error adding to cart' });
    }
});

// Update cart item quantity
router.post('/update/:productId', (req, res) => {
    try {
        const { productId } = req.params;
        const { quantity } = req.body;

        const product = Product.findById(productId);
        
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        product.quantity = Math.max(1, parseInt(quantity));
        product.save();

        res.redirect('/cart');
    } catch (error) {
        console.error('Update Cart Quantity Error:', error);
        res.status(500).json({ message: 'Error updating cart quantity' });
    }
});

// Remove item from cart
router.post('/remove/:productId', (req, res) => {
    try {
        const { productId } = req.params;
        
        const product = Product.findById(productId);
        
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        product.inCart = false;
        product.quantity = 0;
        product.save();

        res.redirect('/cart');
    } catch (error) {
        console.error('Remove from Cart Error:', error);
        res.status(500).json({ message: 'Error removing from cart' });
    }
});

module.exports = router;