import express from 'express';
import { addToCart, clearCart, decreaseProductQty, removeProductFromCart, userCart } from '../Controllers/cart.js';
import { Authenticated } from '../Middlewares/auth.js';

const router = express.Router();

// add to Cart
router.post('/add' , Authenticated , addToCart);

// get user Cart
router.get('/user' , Authenticated , userCart);

// remove product from cart
router.delete('/remove/:productId' , Authenticated , removeProductFromCart);

// clearCart
router.delete('/clear' , Authenticated , clearCart);

// decrease item qty
router.post('/--qty' , Authenticated , decreaseProductQty);

export default router;