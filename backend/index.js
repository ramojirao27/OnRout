require("dotenv").config(); 
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const  connectDB  = require("./database/db");
const userRoutes = require("./routes/userRoutes")
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());


// Environment Variables
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET;

connectDB();

//using the routes 
app.use("/api/auth",userRoutes);




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
