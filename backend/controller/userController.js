const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
    try {
      const { name, email, phone, password, role } = req.body;
  
      // Check if the email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User with this email already exists." });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new User({
        name,
        email,
        phone,
        password: hashedPassword,
        role,
      });
  
      await newUser.save();
  
      res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
      res.status(500).json({ message: "Error creating user", error: error.message });
    }
  };
  // Login a user
const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }
  
      // Check if the password matches
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials." });
      }
  
      // Generate a token
      const token = jwt.sign(
        { id: user._id, role: user.role, verified: user.verified },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
  
      res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      res.status(500).json({ message: "Error logging in", error: error.message });
    }
  };
  const getUserById = async (req, res) => {
    try {
      const { id } = req.params;
  
      const user = await User.findById(id, "-password").populate("address reviews");
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error fetching user", error: error.message });
    }
  };
  const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, phone, role, verified } = req.body;
  
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { name, email, phone, role, verified },
        { new: true, runValidators: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found." });
      }
  
      res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
      res.status(500).json({ message: "Error updating user", error: error.message });
    }
  };
  
  // Delete a user
  const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found." });
      }
  
      res.status(200).json({ message: "User deleted successfully." });
    } catch (error) {
      res.status(500).json({ message: "Error deleting user", error: error.message });
    }
  };
  
  // Add a review to a user
  const addReviewToUser = async (req, res) => {
    try {
      const { id } = req.params; // ID of the user being reviewed
      const { reviewId } = req.body;
  
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }
  
      user.reviews.push(reviewId);
      await user.save();
  
      res.status(200).json({ message: "Review added successfully.", user });
    } catch (error) {
      res.status(500).json({ message: "Error adding review.", error: error.message });
    }
  };
  

  module.exports = {createUser,loginUser,getUserById,deleteUser,updateUser,addReviewToUser}
  
  