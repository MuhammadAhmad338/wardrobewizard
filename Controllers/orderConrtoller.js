const Delivery = require('../Schema/orderSchema');

// Create a new delivery
const createDelivery = async (req, res) => {
    try {
        const newDelivery = new Delivery(req.body);
        const savedDelivery = await newDelivery.save();
        res.status(201).json(savedDelivery);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all deliveries
const getAllDeliveries = async (req, res) => {
    try {
        const deliveries = await Delivery.find();
        res.status(200).json(deliveries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a delivery by ID
const getDeliveryById = async (req, res) => {
    try {
        const delivery = await Delivery.findById(req.params.id);
        if (!delivery) {
            return res.status(404).json({ error: 'Delivery not found' });
        }
        res.status(200).json(delivery);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a delivery by ID
const updateDeliveryById = async (req, res) => {
    try {
        const updatedDelivery = await Delivery.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedDelivery) {
            return res.status(404).json({ error: 'Delivery not found' });
        }
        res.status(200).json(updatedDelivery);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a delivery by ID
const deleteDeliveryById = async (req, res) => {
    try {
        const deletedDelivery = await Delivery.findByIdAndDelete(req.params.id);
        if (!deletedDelivery) {
            return res.status(404).json({ error: 'Delivery not found' });
        }
        res.status(200).json({ message: 'Delivery deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createDelivery,
    getAllDeliveries,
    getDeliveryById,
    updateDeliveryById,
    deleteDeliveryById
};
