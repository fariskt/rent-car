const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  car_name: {
    type: String,
    required: true,
  },
  car_brand: {
    type: String,
    required: true,
  },
  pickup_date: {
    type: String,
    required: true,
  },
  return_date: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  transmission: {
    type: String,
    enum: ["auto", "manual"],
    required: true,
  },
  segment: {
    type: String,
    enum: ["sedan", "hatchback", "suv/muv"],
    required: true,
  },
  air_condition: {
    type: String,
    enum: ["yes", "no"],
    required: true,
  },
  seat_capacity: {
    type: String,
    required: true,
  },
  fuel: {
    type: String,
    enum: ["diesel", "petrol", "ev"],
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
