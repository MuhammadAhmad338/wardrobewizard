const express = require('express');
const {
    submitContactForm,
    getAllContacts
} = require('../Controllers/contactController');

const contactRoute = express.Router();

// Create a new form
contactRoute.post('/contact', submitContactForm);
contactRoute.get('/contact/getAllContacts', getAllContacts);

module.exports = contactRoute;