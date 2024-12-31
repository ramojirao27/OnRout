const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {
  try {
    const mongoUrl = process.env.MONGODB_URI || "mongodb://localhost:27017/startup";
    const connection = await mongoose.connect(mongoUrl);

    console.log("Database Connected Successfully to:", mongoUrl);
  } catch (error) {
    console.error("Database Connection Failed:", error.message);
    process.exit(1); // Exit the process with failure
  }
}

module.exports = connectDB;
