const Car = require("../models/CarModal");
const asyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
dotenv.config();


const getVehicle = asyncHandler(async (req, res) => {
  try {
    const vehicle = await Car.find({});
    res.status(200).json(vehicle);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//get by id
const getVehicleId = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await Car.findById(id);
    res.status(200).json(vehicle);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//put
const updateVehicle = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await Car.findByIdAndUpdate(id, req.body);
    if (!vehicle) {
      res.status(404);
      throw new Error(`cannot find base with id ${id}`);
    }
    const updatedVehicle = await Car.findById(id);
    res.status(200).json(updatedVehicle);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const deleteVehicle = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await Car.findByIdAndDelete(id);
    if (!vehicle) {
      res.status(404);
      throw new Error(`cannot find base with id ${id}`);
    }

    res.status(200).json(vehicle);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  getVehicle,
  getVehicleId,
  updateVehicle,
  deleteVehicle,
};
