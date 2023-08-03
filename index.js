const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs").promises; // Use the 'promises' version of fs
const app = express();
dotenv.config();

const port = process.env.PORT || 6000;
app.use(cors());
app.use(express.json());

// Define common parts of the URL as variables
const shootingResultsRoute = "/shooting-results";
const openSightRoute = "/open-sight";
const pipSightRoute = "/pip-sight";
const pistolRoute = "/pistol";
const urbanRoute = "/urban";
const ruralRoute = "/rural";
const maleRoute = "/male";
const femaleRoute = "/female";
const u14Route = "/u14";
const u17Route = "/u17";
const u19Route = "/u19";

// Define a helper function to read and send data
async function readAndSendData(filename, res) {
  try {
    const fileData = await fs.readFile(filename, "utf8");
    const data = JSON.parse(fileData);
    console.log(`Data loaded successfully from ${filename}`);
    res.send(data);
  } catch (err) {
    console.error(`Error reading ${filename}:`, err);
    res.status(500).send("Error reading data. Please try again later.");
  }
}

// Define routes using async/await and variables
app.get(`/data`, async (req, res) => {
  await readAndSendData("data1.json", res);
});

// app.get(`${shootingResultsRoute}${openSightRoute}${urbanRoute}${maleRoute}${u14Route}`, async (req, res) => {
//   await readAndSendData("Urban-OpenSight-Male-U14.json", res);
// });

// app.get(`${shootingResultsRoute}${openSightRoute}${urbanRoute}${maleRoute}${u17Route}`, async (req, res) => {
//   await readAndSendData("Urban-OpenSight-Male-U17.json", res);
// });

// app.get(`${shootingResultsRoute}${openSightRoute}${urbanRoute}${maleRoute}${u19Route}`, async (req, res) => {
//   await readAndSendData("Urban-OpenSight-Male-U19.json", res);
// });

// Add more routes using the same pattern as needed.

app.get("*", (req, res) => {
  res.status(404).send("Invalid route");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
