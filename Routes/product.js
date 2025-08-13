import express from 'express';
import { addProduct, deleteProductById, getProductById, getProducts, updtaeProductById } from '../Controllers/product.js';

const router = express.Router();

// add product
router.post('/add',addProduct);

// get all products
router.get('/all' , getProducts);

// get product by id
router.get('/:id',getProductById);

// update product by id
router.put('/:id',updtaeProductById);

// delete product by id
router.delete('/:id' , deleteProductById);

export default router;