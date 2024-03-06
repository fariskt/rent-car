const app = express();
const Car = require("../models/CarModal")
const authenticateToken = require("../Middleware/MiddleWare")

app.get("/api/cars", authenticateToken, async (req, res) => {
  const cars = await Car.find({ available: true });
  res.json(cars);
});

app.post("/api/book", authenticateToken, async (req, res) => {
  try {
    const car = await Car.findById(req.body.carId);
    if (!car || !car.available)
      return res.status(404).send("Car not available for booking");

    car.available = false;
    await car.save();
    res.send("Car booked successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});
