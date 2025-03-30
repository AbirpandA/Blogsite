const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  
  try {
    if (!username || !password || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }
    
   
    const existingUser = await User.findOne({ email: email });
    
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = new User({
      username,  
      email,
      password: hashedPassword
    });
    
    await newUser.save();
    return res.status(201).json({ message: "User created successfully" });
  }
  catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ message: "Fill the required fields" });
    }
    
   
    const user = await User.findOne({ email: email });
    
    if (!user) {
      return res.status(404).json({ message: "No user exists. Create an account" });
    }
    
  
    const validPass = await bcrypt.compare(password, user.password);
    
    if (!validPass) {
      return res.status(401).json({ message: "Invalid password. Enter the correct one" });
    }
    
    const token = jwt.sign({ user }, process.env.signature, {
      expiresIn: "1h"
    });
    
    return res.status(200).json({ token, userId: user._id });
  }
  catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { signUp, login };