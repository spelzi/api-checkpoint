const express = require("express");
const { createNewUser } = require("../controllers/userControllers");

const router = express.Router();

// routes for all users endpoints
router.post("/create", createNewUser);

module.exports = router;
