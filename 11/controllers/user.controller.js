const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.json({ message: "Please enter all details" });
    }
    // if user exists
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      return res.json({ message: "user already exist" });
    }
    // hashing the password
    const salt = await bcrypt.genSalt(10); 
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    req.body.password = hashPassword;
    // creating the user
    const user =  new User(req.body);
    await user.save();

    return  res.json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "Please enter all details" });
    }
    // if user exists
    const userExist = await User.findOne({ email: req.body.email });
    if (!userExist) {
      return res.json({ message: "Wrong credentials" });
    }
 // dhkdhwjhdwjdhjwd29832 // ayush123456
    const isPasswordMatched = await bcrypt.compare(
      password,
      userExist.password
    );
    if (!isPasswordMatched) {
      return res.json({ message: "Wrong password" });
    }

    const token = await jwt.sign(
      { id: userExist._id },
      process.env.SECRET_KEY,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    return res
      .cookie("token", token)
      .json({ success: true, message: "Loggedin Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
}

async function getUsers(req, res) {
  try {
    const user = await User.find();
    if (!user) {
      return res.json({ message: "No user found" });
    }
    return res.json({ user: user });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = {
  register,
  login,
  getUsers,
};