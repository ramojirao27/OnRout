import React from "react";
import { useLocation } from "react-router-dom";
import { FaCar, FaTrain, FaBus, FaMotorcycle } from "react-icons/fa";

const TravelPlanDetailsPage = () => {
  const { state: plan } = useLocation();

  const reviews = [
    { id: 1, user: "Alice", review: "Very reliable and punctual!" },
    { id: 2, user: "Bob", review: "Friendly and trustworthy traveler." },
    { id: 3, user: "Charlie", review: "Great experience overall!" },
  ];

  const getIcon = (mode) => {
    switch (mode) {
      case "Car":
        return <FaCar className="text-3xl text-blue-500" />;
      case "Train":
        return <FaTrain className="text-3xl text-green-500" />;
      case "Bus":
        return <FaBus className="text-3xl text-red-500" />;
      case "Bike":
        return <FaMotorcycle className="text-3xl text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div>{getIcon(plan.mode)}</div>
          <h2 className="text-2xl font-bold text-gray-800">
            {plan.source} ➡ {plan.destination}
          </h2>
        </div>
        <p className="text-gray-600">
          <strong>Start Time:</strong> {plan.startTime}
        </p>
        <p className="text-gray-600">
          <strong>Arrival Time:</strong> {plan.arrivalTime}
        </p>
        <p className="text-gray-600">
          <strong>Mode of Travel:</strong> {plan.mode}
        </p>
        <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Request Parcel Delivery
        </button>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Reviews</h3>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white shadow-sm rounded-lg p-4 border border-gray-200"
            >
              <h4 className="font-semibold text-gray-700">{review.user}</h4>
              <p className="text-gray-600">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelPlanDetailsPage;
