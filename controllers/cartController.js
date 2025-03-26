const Product = require('../models/Product');

exports.getCart = async (req, res) => {
    try {
        // In a real application, you'd fetch cart items from the user's session or database
        const cartItems = await Product.find({ inCart: true });
        
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
};

exports.addToCart = async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await Product.findById(productId);
        
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Logic to add to cart (could be session-based or database-stored)
        product.inCart = true;
        product.quantity = (product.quantity || 0) + 1;
        await product.save();

        res.redirect('/cart');
    } catch (error) {
        console.error('Add to Cart Error:', error);
        res.status(500).json({ message: 'Error adding to cart' });
    }
};

exports.updateCartQuantity = async (req, res) => {
    try {
        const { productId } = req.params;
        const { quantity } = req.body;

        const product = await Product.findById(productId);
        
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        product.quantity = Math.max(1, parseInt(quantity));
        await product.save();

        res.redirect('/cart');
    } catch (error) {
        console.error('Update Cart Quantity Error:', error);
        res.status(500).json({ message: 'Error updating cart quantity' });
    }
};

exports.removeFromCart = async (req, res) => {
    try {
        const { productId } = req.params;
        
        const product = await Product.findById(productId);
        
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        product.inCart = false;
        product.quantity = 0;
        await product.save();

        res.redirect('/cart');
    } catch (error) {
        console.error('Remove from Cart Error:', error);
        res.status(500).json({ message: 'Error removing from cart' });
    }
};