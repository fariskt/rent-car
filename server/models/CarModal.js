const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  model: String,
  year: Number,
  available: Boolean,
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
