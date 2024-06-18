const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: false // Optional field
    },
    lastName: {
        type: String,
        required: true // Required field
    },
    address: {
        type: String,
        required: true // Required field
    },
    apartment: {
        type: String,
        required: false // Optional field
    },
    city: {
        type: String,
        required: true // Required field
    },
    postalCode: {
        type: String,
        required: true // Required field
    },
    phone: {
        type: String,
        required: true // Required field
    },
    country: {
        type: String,
        required: true,
        default: 'Pakistan'
    }
});

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;

