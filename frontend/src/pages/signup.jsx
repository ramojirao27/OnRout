// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// import emailjs from "emailjs-com";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     const emailRegex = /\S+@\S+\.\S+/;
//     const phoneRegex = /^[6-9]\d{9}$/;
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     if (!formData.name) {
//       newErrors.name = "Name is required";
//     }

//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!emailRegex.test(formData.email)) {
//       newErrors.email = "Please enter a valid email";
//     }

//     if (!formData.phone) {
//       newErrors.phone = "Phone number is required";
//     } else if (!phoneRegex.test(formData.phone)) {
//       newErrors.phone = "Please enter a valid 10-digit phone number";
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters long";
//     } else if (!/[A-Z]/.test(formData.password)) {
//       newErrors.password = "Password must contain at least one uppercase letter";
//     } else if (!/[a-z]/.test(formData.password)) {
//       newErrors.password = "Password must contain at least one lowercase letter";
//     } else if (!/\d/.test(formData.password)) {
//       newErrors.password = "Password must contain at least one number";
//     } else if (!/[@$!%*?&]/.test(formData.password)) {
//       newErrors.password = "Password must contain at least one special character (e.g., @$!%*?&)";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const sendWelcomeEmail = async (formData) => {
//     // const templateParams = {
//     //   user_name: formData.name, // Send only the user's name
//     // };

//     try {
//       await emailjs.send(
//         "service_g9l1ub8",
//         "template_0i3r3ft",
//         {user_name:"Nani"},
//         "klRm-E4SnTz92g8bm"
//       );
//       console.log("Welcome email sent successfully!");
//     } catch (error) {
//       console.error("Failed to send email:", error);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const isValid = validateForm();
//     if (isValid) {
//       console.log("Form Submitted:", formData);

//       // Simulate a successful signup
//       sendWelcomeEmail(formData); // Send welcome email with only the user's name
//       navigate("/home"); // Redirect to home page
//     }
//   };

//   return (
//     <div className="h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg w-96 p-8">
//         <h1 className="text-black font-bold text-center text-3xl">OnRout</h1>
//         <h2 className="text-center text-xl font-semibold text-gray-700 mb-6">
//           Signup
//         </h2>

//         <form onSubmit={handleSubmit}>
//           {/* Name */}
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-gray-600 text-sm">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
//             />
//             {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
//           </div>

//           {/* Email */}
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-600 text-sm">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
//             />
//             {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
//           </div>

//           {/* Phone */}
//           <div className="mb-4">
//             <label htmlFor="phone" className="block text-gray-600 text-sm">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Enter your phone number"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
//             />
//             {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
//           </div>

//           {/* Password */}
//           <div className="mb-4 relative">
//             <label htmlFor="password" className="block text-gray-600 text-sm">
//               Password
//             </label>
//             <input
//               type={passwordVisible ? "text" : "password"}
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter your password"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
//             />
//             {/* <span
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
//               onClick={() => setPasswordVisible(!passwordVisible)}
//             >
//               {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
//             </span> */}
//             {errors.password && (
//               <p className="text-red-500 text-xs">{errors.password}</p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           >
//             Signup
//           </button>
//         </form>

//         {/* Login Link */}
//         <p className="mt-4 text-center text-sm text-gray-600">
//           Already have an account?{" "}
//           <Link to="/login" className="text-md text-red-500 hover:text-red-600">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// // import React, { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// // import emailjs from "emailjs-com";

// // const Signup = () => {
// //   const navigate = useNavigate();
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     password: "",
// //   });
// //   const [errors, setErrors] = useState({});
// //   const [passwordVisible, setPasswordVisible] = useState(false);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const validateForm = () => {
// //     const newErrors = {};
// //     const emailRegex = /\S+@\S+\.\S+/;
// //     const phoneRegex = /^[6-9]\d{9}$/;

// //     if (!formData.name) {
// //       newErrors.name = "Name is required";
// //     }

// //     if (!formData.email) {
// //       newErrors.email = "Email is required";
// //     } else if (!emailRegex.test(formData.email)) {
// //       newErrors.email = "Please enter a valid email";
// //     }

// //     if (!formData.phone) {
// //       newErrors.phone = "Phone number is required";
// //     } else if (!phoneRegex.test(formData.phone)) {
// //       newErrors.phone = "Please enter a valid 10-digit phone number";
// //     }

// //     if (!formData.password) {
// //       newErrors.password = "Password is required";
// //     }

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const templateParams = {
// //     user_name: formData.name, // User's name
// //     to_email: formData.email, // Recipient's email
// //     support_email: "support@example.com", // Support email address
// //   };

// //   const sendWelcomeEmail = async (formData) => {
// //     const templateParams = {
// //       to_email: formData.email,
// //       user_name: formData.name,
// //     };

// //     try {
// //       await emailjs.send(
// //         "service_g9l1ub8",
// //         "template_0i3r3ft",
// //         templateParams,
// //         "klRm-E4SnTz92g8bm"
// //       );
// //       console.log("Welcome email sent successfully!");
// //     } catch (error) {
// //       console.error("Failed to send email:", error);
// //     }
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const isValid = validateForm();
// //     if (isValid) {
// //       console.log("Form Submitted:", formData);

// //       // Simulate a successful signup
// //       sendWelcomeEmail(); // Send welcome email
// //       navigate("/home"); // Redirect to home page
// //     }
// //   };

// //   return (
// //     <div className="h-screen flex items-center justify-center bg-gray-100">
// //       <div className="bg-white shadow-lg rounded-lg w-96 p-8">
// //         <h1 className="text-black font-bold text-center text-3xl">OnRout</h1>
// //         <h2 className="text-center text-xl font-semibold text-gray-700 mb-6">
// //           Signup
// //         </h2>

// //         <form onSubmit={handleSubmit}>
// //           {/* Name */}
// //           <div className="mb-4">
// //             <label htmlFor="name" className="block text-gray-600 text-sm">
// //               Name
// //             </label>
// //             <input
// //               type="text"
// //               id="name"
// //               name="name"
// //               value={formData.name}
// //               onChange={handleChange}
// //               placeholder="Enter your name"
// //               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
// //             />
// //             {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
// //           </div>

// //           {/* Email */}
// //           <div className="mb-4">
// //             <label htmlFor="email" className="block text-gray-600 text-sm">
// //               Email
// //             </label>
// //             <input
// //               type="email"
// //               id="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               placeholder="Enter your email"
// //               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
// //             />
// //             {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
// //           </div>

// //           {/* Phone */}
// //           <div className="mb-4">
// //             <label htmlFor="phone" className="block text-gray-600 text-sm">
// //               Phone Number
// //             </label>
// //             <input
// //               type="tel"
// //               id="phone"
// //               name="phone"
// //               value={formData.phone}
// //               onChange={handleChange}
// //               placeholder="Enter your phone number"
// //               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
// //             />
// //             {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
// //           </div>

// //           {/* Password */}
// //           <div className="mb-4 relative">
// //             <label htmlFor="password" className="block text-gray-600 text-sm">
// //               Password
// //             </label>
// //             <input
// //               type={passwordVisible ? "text" : "password"}
// //               id="password"
// //               name="password"
// //               value={formData.password}
// //               onChange={handleChange}
// //               placeholder="Enter your password"
// //               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
// //             />
// //             <span
// //               className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
// //               onClick={() => setPasswordVisible(!passwordVisible)}
// //             >
// //               {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
// //             </span>
// //             {errors.password && (
// //               <p className="text-red-500 text-xs">{errors.password}</p>
// //             )}
// //           </div>

// //           {/* Submit Button */}
// //           <button
// //             type="submit"
// //             className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //           >
// //             Signup
// //           </button>
// //         </form>

// //         {/* Login Link */}
// //         <p className="mt-4 text-center text-sm text-gray-600">
// //           Already have an account?{" "}
// //           <Link to="/login" className="text-md text-red-500 hover:text-red-600">
// //             Login
// //           </Link>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Signup;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^[6-9]\d{9}$/;
    const passwordErrors = [];

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.password) {
      passwordErrors.push("Password is required");
    } else {
      if (formData.password.length < 8) {
        passwordErrors.push("Password must be at least 8 characters long");
      }
      if (!/[A-Z]/.test(formData.password)) {
        passwordErrors.push("Password must contain at least one uppercase letter");
      }
      if (!/[a-z]/.test(formData.password)) {
        passwordErrors.push("Password must contain at least one lowercase letter");
      }
      if (!/\d/.test(formData.password)) {
        passwordErrors.push("Password must contain at least one number");
      }
      if (!/[@$!%*?&]/.test(formData.password)) {
        passwordErrors.push("Password must contain at least one special character (e.g., @$!%*?&)");
      }
    }

    if (passwordErrors.length > 0) {
      newErrors.password = passwordErrors;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendWelcomeEmail = async (formData) => {
    try {
      await emailjs.send(
        "service_g9l1ub8",
        "template_0i3r3ft",
        { user_name: "Nani" },
        "klRm-E4SnTz92g8bm"
      );
      console.log("Welcome email sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log("Form Submitted:", formData);
      sendWelcomeEmail(formData);
      navigate("/home");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-96 p-8">
        <h1 className="text-black font-bold text-center text-3xl">OnRout</h1>
        <h2 className="text-center text-xl font-semibold text-gray-700 mb-6">Signup</h2>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 text-sm">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm">Email</label>
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

          {/* Phone */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-600 text-sm">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-600 text-sm">Password</label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            />
            {/* Password Visibility Toggle */}
            {/* <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span> */}

            {/* Displaying password validation errors */}
            {errors.password && (
              <div className="text-red-500 text-xs">
                {errors.password.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Signup
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-md text-red-500 hover:text-red-600 hover:underline">
  Login
</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
