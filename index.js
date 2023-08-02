const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv'); // Require the dotenv package
const app = express();
dotenv.config(); // Load environment variables from .env

const port = process.env.PORT || 5000;
// Middleware: CORS
app.use(cors());

app.use(express.json());

let data = [
  {
    SrNo: 1,
    CompNo: 497,
    ShooterName: "SIDDHESH THORAT (MHPM1101200801MS)",
    School: "Holly Cross",
    Series: [92, 92, 95, 93],
    Penalty: 0,
    Total: 372,
    Rank: "I",
    Rem: "C",
  },
  {
    SrNo: 2,
    CompNo: 171,
    ShooterName: "SAGAR PATIL (MHPM0106198801MC)",
    School: "Mt. Carmel",
    Series: [94, 95, 90, 91],
    Penalty: 0,
    Total: 370,
    Rank: "II",
    Rem: "C",
  },
  {
    SrNo: 3,
    CompNo: 171,
    ShooterName: "SAGAR PATIL (MHPM0106198801MC)",
    School: "Mt. Carmel",
    Series: [94, 95, 90, 91],
    Penalty: 0,
    Total: 370,
    Rank: "II",
    Rem: "C",
  },
  {
    SrNo: 4,
    CompNo: 171,
    ShooterName: "Ankush Dongre (MHPM0106198801MC)",
    School: "Mt. Carmel",
    Series: [94, 95, 90, 91],
    Penalty: 0,
    Total: 370,
    Rank: "II",
    Rem: "C",
  },
];
// Routes
app.get('/', (req, res) => {
  res.send(data);
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
