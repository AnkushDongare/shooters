const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv"); // Require the dotenv package
const fs = require("fs");
const app = express();
dotenv.config(); // Load environment variables from .env

const port = process.env.PORT || 6000;
// Middleware: CORS
app.use(cors());

app.use(express.json());

let data;
// Read data from data.json file and store it in the data variable
fs.readFile("data.json", "utf8", (err, fileData) => {
  if (err) {
    console.error("Error reading data.json:", err);
  } else {
    data = JSON.parse(fileData);
    console.log("Data loaded successfully from data.json");
  }
});

// Routes
app.get("/", (req, res) => {
  // Ensure data is loaded before sending the response
  if (data) {
    res.send(data);
  } else {
    res.status(500).send("Data is not available yet. Please try again later.");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
