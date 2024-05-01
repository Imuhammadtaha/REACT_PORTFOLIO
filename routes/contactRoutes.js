const express = require("express");
const { contactMe } = require("../controllers/contactController.js");

//router object
const router = express.Router();

//routes
router.post("/sendEmail", contactMe);

// export
module.exports = router;
