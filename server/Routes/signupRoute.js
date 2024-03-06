const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      local: {
        email: req.body.email,
        password: hashedPassword,
      },
    });
    await user.save();
    const token = jwt.sign({ email: user.local.email }, process.env.JWT_SECRET);

    res.status(201).json({
      message: 'Signup successful',
      token,
      user: {
        id: user._id,
        email: user.local.email,
        displayName: user.displayName,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
