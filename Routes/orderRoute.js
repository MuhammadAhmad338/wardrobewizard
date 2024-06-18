const express = require('express');
const {
    createDelivery,
    getAllDeliveries,
    getDeliveryById,
    updateDeliveryById,
    deleteDeliveryById
} = require('../Controllers/orderConrtoller');

const router = express.Router();

// Create a new delivery
router.post('/', createDelivery);

// Get all deliveries
router.get('/', getAllDeliveries);

// Get a delivery by ID
router.get('/:id', getDeliveryById);

// Update a delivery by ID
router.put('/:id', updateDeliveryById);

// Delete a delivery by ID
router.delete('/:id', deleteDeliveryById);

module.exports = router;
