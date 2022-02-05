const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alertSchema = new Schema({
    Ticker: {type: String, require: true},
    Company: {type: String, require: true},
    ExpirationDay: {type: String, require: true},
    ExpirationMonth: {type: String, require: true},
    ExpirationYear: {type: String, require: true},
    Strike: {type: String, require: true},
    Position: {type: String, require: true},
    ContractP: {type: Number, require: true},
    Notes: {type: String, require: false}
})

const Alert = mongoose.model("Alert", alertSchema);

module.exports = Alert;