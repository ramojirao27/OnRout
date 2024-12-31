

import React, { useState, useRef, useEffect } from "react";
import { FaMotorcycle, FaCar, FaBus, FaTrain, FaExchangeAlt } from "react-icons/fa"; // Import travel icons and double arrow
import { Autocomplete } from "@react-google-maps/api"; // Import Autocomplete

export default function ParcelForm() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    travelMode: "", // Track selected travel mode
  });

  const autocompleteFromRef = useRef(null); // Reference for "from" input
  const autocompleteToRef = useRef(null);   // Reference for "to" input

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTravelModeChange = (mode) => {
    setFormData({ ...formData, travelMode: mode });
  };

  const handleSwitchLocations = () => {
    setFormData({ ...formData, from: formData.to, to: formData.from });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add API call or further processing here
  };

  useEffect(() => {
    const loadGoogleScript = () => {
      const script = document.createElement("script");
      console.log(process.env.GOOGLE_MAPS_API);
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API}&libraries=places`;
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        // Initialize Autocomplete for 'from' and 'to' fields
        const autocompleteFrom = new window.google.maps.places.Autocomplete(autocompleteFromRef.current);
        const autocompleteTo = new window.google.maps.places.Autocomplete(autocompleteToRef.current);

        autocompleteFrom.addListener("place_changed", () => {
          const place = autocompleteFrom.getPlace();
          setFormData({ ...formData, from: place.formatted_address });
        });

        autocompleteTo.addListener("place_changed", () => {
          const place = autocompleteTo.getPlace();
          setFormData({ ...formData, to: place.formatted_address });
        });
      };
    };

    loadGoogleScript();
  }, [formData]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Post Parcel Details
        </h2>

        {/* From Location */}
        <div>
          <label htmlFor="from" className="block text-sm font-medium text-gray-700 mb-1">
            From Location
          </label>
          <input
            type="text"
            id="from"
            name="from"
            value={formData.from}
            onChange={handleChange}
            ref={autocompleteFromRef} // Reference for autocomplete
            placeholder="Enter starting location"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        {/* Double Arrow to Switch Locations */}
        <div className="flex justify-center items-center my-2">
          <FaExchangeAlt
            className="text-red-500 cursor-pointer"
            size={24}
            onClick={handleSwitchLocations}
          />
        </div>

        {/* To Location */}
        <div>
          <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">
            To Location
          </label>
          <input
            type="text"
            id="to"
            name="to"
            value={formData.to}
            onChange={handleChange}
            ref={autocompleteToRef} // Reference for autocomplete
            placeholder="Enter destination location"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        {/* Time */}
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        {/* Mode of Travel */}
        <div className="flex space-x-4">
          {["bike", "car", "bus", "train"].map((mode) => (
            <div
              key={mode}
              onClick={() => handleTravelModeChange(mode)}
              className={`cursor-pointer p-2 rounded-full flex items-center justify-center ${formData.travelMode === mode ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
            >
              {mode === "bike" && <FaMotorcycle size={20} />}
              {mode === "car" && <FaCar size={20} />}
              {mode === "bus" && <FaBus size={20} />}
              {mode === "train" && <FaTrain size={20} />}
              <span className="ml-2">{mode.charAt(0).toUpperCase() + mode.slice(1)}</span>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
