const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userModel } = require("../models/User");

exports.register = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser){
         return res.status(400).send({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({ username, email, password: hashedPassword, role });
    await newUser.save();

    res.status(201).send({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).send({ message: "Error registering user" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
        return res.status(400).send({ message: "User not found" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return res.status(400).send({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userID: user._id, email: user.email ,role: user.role}, process.env.tokenSecretSign, {
      expiresIn: "1h"
    });

    res.status(200).send({ user, token });
  } catch (err) {
    res.status(500).send({ message: "Login error" });
  }
};
