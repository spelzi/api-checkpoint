const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

// pass the express.json middleware to receive and send json data
app.use(express.json());

// a global user routes pass as a global middleware to the express app
app.use("/users", userRoutes);

// a base url to ping server if its runnning and alive
app.get("/", (req, res) => {
  res.send("Hello Word");
});

module.exports = app;
