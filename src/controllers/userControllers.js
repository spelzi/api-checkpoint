const User = require("../models/userModel");

const createNewUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // create new user object data with hashed password
    const userData = { firstName, lastName, email, password };

    // create new user on database with userData object
    const newUser = await User.create(userData);

    // send error message if user data fails to create
    if (!newUser) {
      return res.status(400).json({ error: "something went wrong" });
    }

    return res
      .status(201)
      .json({ message: "user created successfully", newUser });
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
};

module.exports = { createNewUser };
