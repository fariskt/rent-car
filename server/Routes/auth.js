const session = require("express-session");
const passport = require("passport");
const express = require("express");
const router = express.Router();
const crypto = require("crypto");
require("dotenv").config();
const OAuth2Strategy = require("passport-google-oauth20").Strategy;
const userdb = require("../models/UserModel");

const clientid = process.env.CLIENT_ID;
const clientsecret = process.env.CLIENT_SECRET;
const secret = crypto.randomBytes(64).toString("hex");

router.use(
  session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
  })
);

// setuppassport
router.use(passport.initialize());
router.use(passport.session());

passport.use(
  new OAuth2Strategy(
    {
      clientID: clientid,
      clientSecret: clientsecret,
      callbackURL: "https://rent-car-api.vercel.app/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await userdb.findOne({ googleId: profile.id });

        if (!user) {
          user = new userdb({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            image: profile.photos[0].value,
          });

          await user.save();
        }

        return done(null, user);
      } catch (error) {
        console.error("Error during authentication:", error);

        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// initial google ouath login
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "https://car4rental.vercel.app/",
    failureRedirect: "https://car4rental.vercel.app/login",
  })
);

router.get("/login/success", async (req, res) => {
  if (req.user) {
    res.status(200).json({ message: "user Login", user: req.user });
  } else {
    res.status(400).json({ message: "Not Authorized" });
  }
});

router.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("https://car4rental.vercel.app/");
  });
});

module.exports = router