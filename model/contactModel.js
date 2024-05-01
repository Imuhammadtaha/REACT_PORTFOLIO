const mongoose = require("mongoose");

// Define the user schema
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },

    message: {
      type: String,
    },
  },
  { timestamps: true }
);

// Export the user model
// Use module.exports for CommonJS
module.exports = mongoose.model("Contact", contactSchema);
