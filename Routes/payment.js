import express from 'express'
import { allOrders, checkout, userOrder, verify } from '../Controllers/payment.js'
import { Authenticated } from '../Middlewares/auth.js';

const router = express.Router();

// checkout
router.post('/checkout' , checkout);

// verify and save to DB
router.post('/verify-payment' , verify);

// user order
router.get('/userorder' , Authenticated ,userOrder)

// all orders
router.get('/orders' , allOrders);

export default router;