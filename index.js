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

// Routes
app.get("/data1", (req, res) => {
  readAndSendData("data1.json", res);
});

app.get("/data2", (req, res) => {
  readAndSendData("data2.json", res);
});

app.get("/data3", (req, res) => {
  readAndSendData("data3.json", res);
});

// Add more routes for other JSON files as needed.

function readAndSendData(filename, res) {
  // Read data from the JSON file and send it as a response
  fs.readFile(filename, "utf8", (err, fileData) => {
    if (err) {
      console.error(`Error reading ${filename}:`, err);
      res.status(500).send("Error reading data. Please try again later.");
    } else {
      const data = JSON.parse(fileData);
      console.log(`Data loaded successfully from ${filename}`);
      res.send(data);
    }
  });
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
