const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { addToCart, updateCartItem, removeFromCart } = require('../controllers/cartController');

router.post('/', auth, addToCart);
router.put('/:productId', auth, updateCartItem);
router.delete('/:productId', auth, removeFromCart);

module.exports = router;
