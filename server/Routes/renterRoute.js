const express = require("express");
const router = express.Router();
const Car = require("../models/CarModal");
require("dotenv").config();
const vehicleController = require("../controllers/vehicleController")
const multer = require("multer");
const admin = require("firebase-admin");

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.STORAGE_BUCKET,
});

const bucket = admin.storage().bucket();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/", upload.single("img"), async (req, res) => {
  try {
    console.log("Received request:", req.body);
    const {
      car_name,
      car_brand,
      pickup_date,
      return_date,
      price,
      location,
      transmission,
      segment,
      air_condition,
      seat_capacity,
      fuel,
    } = req.body;
    if (
      !car_name ||
      !car_brand ||
      !pickup_date ||
      !return_date ||
      !price ||
      !location ||
      !transmission ||
      !air_condition ||
      !segment ||
      !seat_capacity ||
      !fuel ||
      !req.file
    ) {
      return res.status(400).json({ error: "Incomplete data or missing file" });

    }

    // Upload the file to Firebase Storage
    const fileName = `${Date.now()}_${req.file.originalname}`;
    const fileUpload = bucket.file(fileName);

    await fileUpload.save(req.file.buffer, {
      metadata: {
        contentType: req.file.mimetype,
      },
    });

    // Get the URL of the uploaded file
    const [url] = await fileUpload.getSignedUrl({
      action: "read",
      expires: "03-09-2491",
    });

    const newData = new Car({
      car_name,
      car_brand,
      pickup_date,
      return_date,
      price,
      location,
      transmission,
      segment,
      air_condition,
      seat_capacity,
      fuel,
      img: url,
    });
    
    await newData.save();

    res.status(201).json(newData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/", vehicleController.getVehicle);
router.get("/:id", vehicleController.getVehicleId);
router.put("/:id", vehicleController.updateVehicle);
router.delete("/:id", vehicleController.deleteVehicle);

module.exports = router;
