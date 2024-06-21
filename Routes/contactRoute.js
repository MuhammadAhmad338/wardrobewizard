const express = require('express');
const {
    submitContactForm
} = require('../Controllers/contactController');

const contactRoute = express.Router();

// Create a new form
contactRoute.post('/contact', submitContactForm);

module.exports = contactRoute;