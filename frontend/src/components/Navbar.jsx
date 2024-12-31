
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { MdLogin, MdLogout } from "react-icons/md";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);  // State to toggle menu visibility

  // Toggle menu visibility on small devices
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-red-500 p-4 shadow-lg shadow-black">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-white text-3xl font-bold">OnRout</h1>

        {/* Hamburger Icon (Visible on small devices) */}
        <div className="md:hidden flex items-center shadow-xl">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Menu Items (Desktop) */}
        <div className="hidden md:flex ml-auto space-x-6 pr-8">
          <Link to="/" className="text-white text-lg hover:underline">Home</Link>
          <Link to="/about" className="text-white text-lg hover:underline">About Us</Link>
          {/* <Link to="/signup" className="text-white text-lg hover:underline">Signup</Link> */}
          <Link to="/login" className="text-white text-lg flex items-center gap-2 hover:underline">Login <MdLogin /></Link>
        </div>
      </div>

      {/* Menu Items (Mobile) */}
      <div className={`flex flex-col gap-2 md:hidden mt-5 ${menuOpen ? "block" : "hidden"}`}>
        <Link to="/" className="text-white hover:underline">Home</Link>
        <Link to="/explore" className="text-white hover:underline">Explore</Link>
        {/* <Link to="/signup" className="text-white hover:underline">Signup</Link> */}
        <Link to="/login" className="text-white flex items-center gap-2 hover:underline">Login <MdLogin /></Link>
      </div>
    </nav>
  );
}

