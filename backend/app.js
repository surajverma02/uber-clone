const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");
const userRouters = require('./routes/user.routes');
const captainRouters = require('./routes/captain.routes');

connectDB();
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to the Uber Clone");
});

app.use("/users", userRouters);
app.use("/captains", captainRouters);

module.exports = app;
