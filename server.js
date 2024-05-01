const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const path = require("path");
// dotenv configuration
dotenv.config();
connectDB();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1/portfolio", require("./routes/contactRoutes.js"));

//linking static files

app.use(express.static(path.join(__dirname, "./myportfolio/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./myportfolio/build/index.html"));
});

// port
const PORT = process.env.PORT || 8080;

// listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
