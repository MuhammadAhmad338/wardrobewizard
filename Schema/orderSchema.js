const mongoose = require('mongoose');

const deliverySchema =  new mongoose.Schema({
    firstName: {
      type: String,
      required: false
    },
    lastName: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    apartment: {
      type: String,
      required: false
    },
    city: {
      type: String,
      required: true
    },
    postalCode: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    paymentMethod: {
        type: String,
        required: true,
        default: 'COD'
    },
    country: {
      type: String,
      required: true,
      default: 'Pakistan'
    }
});

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;

