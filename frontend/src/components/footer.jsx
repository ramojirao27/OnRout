
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Footer content */}
        <div className="flex  flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left side: Links */}
          <div className="flex flex-col space-y-3 md:w-1/3 text-center md:text-left">
            <Link to="/privacy-policy" className="text-sm hover:underline">Privacy Policy</Link>
            <Link to="/terms-conditions" className="text-sm hover:underline">Terms & Conditions</Link>
            <Link to="/about" className="text-sm hover:underline">About Us</Link>
          </div>

          {/* Center: Social Media Links */}
          <div className="flex flex-col items-center space-y-3 md:w-1/3">
            <h3 className="font-semibold text-xl">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl hover:text-blue-600" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl hover:text-blue-400" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-blue-700" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-pink-500" />
              </a>
            </div>
          </div>

          {/* Right side: Contact and Copyright */}
          <div className="text-center md:text-right md:w-1/3">
            <h3 className="font-semibold text-xl">Contact Us</h3>
            <p className="text-sm mt-2">Email: <a href="mailto:support@onrout.com" className="hover:underline">support@onrout.com</a></p>
            <p className="text-sm mt-2">&copy; 2024 OnRout. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white py-5">
//       <div className="container mx-auto px-6">
//         {/* Footer content */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-10">
//           {/* Left side: Links */}
//           <div className="flex flex-col space-y-3 md:w-1/3 text-center md:text-left">
//             <h3 className="font-semibold text-lg mb-2">Important Links</h3>
//             <Link to="/about-us" className="text-sm hover:underline">About Us</Link>
//             <Link to="/services" className="text-sm hover:underline">Services</Link>
//             <Link to="/privacy-policy" className="text-sm hover:underline">Privacy Policy</Link>
//             <Link to="/terms-conditions" className="text-sm hover:underline">Terms & Conditions</Link>
//             <Link to="/contact-us" className="text-sm hover:underline">Contact Us</Link>
//           </div>

//           {/* Center: Social Media Links */}
//           <div className="flex flex-col items-center space-y-3 md:w-1/3">
//             <h3 className="font-semibold text-lg">Follow Us</h3>
//             <div className="flex space-x-4 mt-2">
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//                 <FaFacebook className="text-2xl hover:text-blue-600" />
//               </a>
//               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//                 <FaTwitter className="text-2xl hover:text-blue-400" />
//               </a>
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//                 <FaLinkedin className="text-2xl hover:text-blue-700" />
//               </a>
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//                 <FaInstagram className="text-2xl hover:text-pink-500" />
//               </a>
//             </div>
//           </div>

//           {/* Right side: Contact and Copyright */}
//           <div className="flex flex-col items-center text-center md:text-right md:w-1/3">
//             <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
//             <p className="text-sm">Phone: <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a></p>
//             <p className="text-sm">Email: <a href="mailto:support@onrout.com" className="hover:underline">support@onrout.com</a></p>
//             <p className="text-sm mt-4">&copy; 2024 OnRout. All rights reserved.</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
