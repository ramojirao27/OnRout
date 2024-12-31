import axios from "axios";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; 
import { Link, redirect, useNavigate } from "react-router-dom"; // Import eye icons

// const navigate = useNavigate();
// import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});  // To store validation errors
  const [passwordVisible, setPasswordVisible] = useState(false);  // To toggle password visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    // Email Validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    // Password Validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;  // Return true if no errors
  };
   const postData = async ()=>{
    try {
        const response = await axios.post("http://localhost:5000/api/auth/login", formData);
        console.log("Response:", response.data);
        console.log(response)
        if(response.status =200){
            navigate("/home");
        }
      } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
      }
       
        
   }


  

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();  // Validate before submitting
    if (isValid) {
     postData();
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-96 p-8">
        {/* Logo */}
       
        <h1 className="text-black font-bold text-center text-3xl">OnRout</h1>
        {/* Login Form */}
        <h2 className="text-center text-xl font-semibold text-gray-700 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-600 text-sm">
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}  // Toggle password visibility
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            />
            {/* <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span> */}
            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-md text-red-500 hover:text-red-600 hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
