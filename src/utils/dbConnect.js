const mongoose = require("mongoose");
const dotenv = require("dotenv");

const MONGO_URL = MONGO_URL;
const MONGO_URL2 = MONGO_URL2;

const mongoConnect = async () => {
  mongoose
    .connect(MONGO_URL)
    .then(() => console.log("db connection is ready..."))
    .catch((error) => console.log(error));
};

module.exports = mongoConnect;
