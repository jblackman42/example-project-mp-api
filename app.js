// Importing required modules
const express = require('express');
require('dotenv').config();

// Initializing the express app
const app = express();

// Import function for database connection  
const connectDB = require('./db/connect.js');

// Express settings
app.set('trust proxy', 1); // Trust first proxy
app.set('view engine', 'ejs'); // Set the view engine to ejs

// Static file middleware for serving styles, scripts and assets
app.use("/styles", express.static(__dirname + "/views/styles"));
app.use("/scripts", express.static(__dirname + "/views/scripts"));
app.use("/assets", express.static(__dirname + "/views/assets"));

//Navigation routing
app.use('/', require('./routes/index'));
// API routing
app.use('/api', require('./routes/mp'));

// Starting the server
const port = process.env.PORT || 3000;
(async () => {
  try {
    // Connect to the database
    await connectDB();

    app.listen(port, console.log(`\n Server is listening on port ${port}\n http://localhost:${port}`));
  } catch (error) { console.log(error) }
})();
