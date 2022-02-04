const express = require("express");
const mongoose = require("mongoose");
// const { MongoClient } = require('mongodb');
const path = require("path");
// require("./config/connection");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
// const apiRoutes = require("./routes/apiRoutes");


// Mongodb Atlas Connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://optionsarena:1234@oadb.1n8kj.mongodb.net/OADB?retryWrites=true&w=majority"
);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
} else (err) => {
  
  console.log(err); 
} 




// Define API routes here
app.use(routes)


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
