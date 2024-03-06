const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/", async (req, res) => {
  try {
    const user = await User.findOne({ "local.email": req.body.email });

    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.local.password
    );

    if (!validPassword) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ email: user.local.email }, process.env.JWT_SECRET);

    // Send the token and user information in the response
    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.local.email,
        displayName: user.displayName, // Include other user information if needed
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
