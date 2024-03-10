require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT;
const auth = require("./Routes/auth");
const loginRoute = require("./Routes/loginRoute");
const signUpRoute = require("./Routes/signupRoute");
const renterRoute = require("./Routes/renterRoute");
const errorMiddleware = require("./Middleware/errorMiddleWare")
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

app.use("/", auth);
app.use("/register", signUpRoute);
app.use("/login", loginRoute);
app.use("/api/renter-vehicle", renterRoute);

app.use(errorMiddleware);

const DB = process.env.MONGO_URL;
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

mongoose
  .connect(DB)
  .then(() => console.log("database connected"))
  .catch((err) => console.log("errr", err));

app.listen(PORT, () => {
  console.log(`server start at port no ${PORT}`);
});
