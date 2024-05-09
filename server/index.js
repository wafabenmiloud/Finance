// app.js
const express = require('express');
const path = require('path');
const routes = require("./routes");
const cors = require('cors');
const app = express();
const { dbConnect } = require('./db');
const cookieParser = require('cookie-parser');


const port = process.env.PORT || 8888;
app.use(express.json());
app.use(cookieParser());
app.use('/api', routes);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors({credentials: true, origin: ['https://www.main-bvxea6i-fygohu5xgmi7k.ovhcloud-fr-1.webpaas.ovh.net']}));
app.set("trust proxy", 1);


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Fallback to React app for all other routes
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});


// Define the port to run on
app.listen(port, async () => {
  console.log(`Server is up and running on port ${port}`);
  try {
      const message = await dbConnect();
      console.log(message); // Log the message returned by dbConnect function
  } catch (error) {
      console.error("Error connecting to database:", error);
  }
});