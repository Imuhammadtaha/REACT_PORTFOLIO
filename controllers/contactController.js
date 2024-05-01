const contactModel = require("../model/contactModel");

const contactMe = async (req, res) => {
  try {
    // Destructure data from request body
    const { name, email, message } = req.body;

    // Validate input
    if (!name) {
      return res.status(400).send({
        success: false,
        resp: "Name is required",
      });
    }
    if (!email) {
      return res.status(400).send({
        success: false,
        resp: "Email is required",
      });
    }
    if (!message) {
      return res.status(400).send({
        success: false,
        resp: "Message is required",
      });
    }

    // Create a new contact instance with the provided data
    const contact = new contactModel({
      name,
      email,
      message,
    });

    // Save the contact instance to the database
    await contact.save();

    // Send a success response
    res.status(200).send({
      success: true,
      resp: "Message Sent Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      resp: "Error in Sending Message. Please contact support.",
      error: error.message,
    });
  }
};

module.exports.contactMe = contactMe;
