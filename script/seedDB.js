const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb+srv://optionsarena:1234@oadb.1n8kj.mongodb.net/OADB?retryWrites=true&w=majority"
);

const alertSeed = [
    {
        Ticker: "AAPL",
    Company: "Apple",
    Expiration: "DEC 7 22",
    Position: "C",
    ContractP: "1.12",
    Notes: "Some Notes."

}]

db.Alert
  .deleteMany({})
  .then(() => db.Alert.collection.insertMany(alertSeed))
  .then(data => {
    console.log(data.result + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
