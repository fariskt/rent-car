require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;
const auth = require("./Routes/auth")
const loginRoute = require("./Routes/loginRoute")
const signUpRoute = require("./Routes/signupRoute")
const mongoose = require("mongoose");


app.use(cors());
app.use(express.json());
app.use("/", auth)
app.use("/register", signUpRoute)
app.use("/login", loginRoute)

const DB = process.env.MONGO_URL;

mongoose
  .connect(DB)
  .then(() => console.log("database connected"))
  .catch((err) => console.log("errr", err));

app.listen(PORT, () => {
  console.log(`server start at port no ${PORT}`);
});
