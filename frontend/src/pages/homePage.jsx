
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReviewsCarousel from "../components/reviews";
import SimpleSlider from "../components/sliderComponent";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { FaBoxOpen } from "react-icons/fa";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";

const Homepage = () => {


  return (
    <div className="bg-gray-50">
      <Navbar/>
      {/* Hero Section */}
      <SimpleSlider/>
      <section className="bg-white text-black text-center py-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Ready to Start Delivering or Sending?</h2>
        <p className="text-lg text-gray-400 sm:text-xl mb-8 px-6 max-w-3xl mx-auto">
          Join OnRout now to easily send parcels or make extra money by carrying them!
        </p>
        <div className="flex justify-center gap-6">
          <Link
            to="/explore"
            className="bg-red-500 text-white  font-semibold py-3 px-8 rounded-lg hover:bg-red-600 transition duration-300 flex items-center gap-2"
          >
            Send a Parcel<FaBoxOpen/>
          </Link>
          <Link
            to="/parcel"
            className="bg-black text-white font-semibold py-3 px-8 rounded-lg hover:bg-black transition duration-300 flex items-center gap-2" 
          >
            Carry the Parcel
            <FaPeopleCarryBox/>
          </Link>
        </div>
      </section>
   
      {/* <section className="bg-red-500 text-white text-center py-20 px-4">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
          Send or Carry Parcels with Ease
        </h1>
        <p className="text-lg text-gray-100 sm:text-xl mb-8 px-6 max-w-3xl mx-auto">
          Connect with travelers to send parcels or make extra money by carrying them on your journey.
        </p>
        <Link
          to="/explore"
          className="bg-white text-black font-semibold py-3 px-8 rounded-lg hover:bg-indigo-100 transition duration-300"
        >
          Get Started
        </Link>
      </section> */}
      <section className="bg-red-500 text-white text-center py-20 px-4">
  <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
    Send or Carry Parcels with Eas
  </h1>
  <p className="text-lg text-gray-100 sm:text-xl mb-8 px-6 max-w-3xl mx-auto">
    Connect with travelers to send parcels or make extra money by carrying them on your journey.
  </p>
  <Link
    to="/explore"
    className="bg-black text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 transition duration-300"
  >
    Get Started
  </Link>
</section>

      <ReviewsCarousel/>

  

      <Footer/>
      {/* <footer className="bg-black text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 ParcelLink. All Rights Reserved.</p>
          <div className="flex justify-center gap-8 mt-4">
            <Link to="/privacy" className="hover:text-black">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-black">Terms of Service</Link>
            <Link to="/contact" className="hover:text-black">Contact Us</Link>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Homepage;
