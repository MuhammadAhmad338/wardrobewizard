const Contact = require("../Schema/contactSchema");

// Function to handle contact form submission
const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate request data
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Create a new user entry
    const contactUser = new Contact({ name, email, message });
    await contactUser.save();

    // Send a success response
    res.status(201).json({ message: 'Contact form submitted successfully.' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ error: 'An error occurred while submitting the form. Please try again later.' });
  }
};

const getAllContacts = async (req, res) => {
  try {
      const contacts = await Contact.find();
      res.status(200).json(contacts);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

module.exports = {
  submitContactForm,
  getAllContacts
};


