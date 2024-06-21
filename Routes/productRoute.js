const express = require('express');
const productRouter = express.Router();
const {
    getAllProducts123,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../Controllers/productController'); // Adjust path as needed

// GET - Retrieve all products
productRouter.get('/getProducts', getAllProducts123);

// GET - Retrieve a single product by ID
productRouter.get('/:id', getProductById);

// POST - Create a new product
productRouter.post('/postProduct', createProduct);

// PUT - Update a product by ID
productRouter.put('/:id', updateProduct);

// DELETE - Delete a product by ID
productRouter.delete('/:id', deleteProduct);

module.exports = productRouter;
