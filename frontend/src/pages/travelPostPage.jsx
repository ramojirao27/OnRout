import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCar, FaTrain, FaBus, FaMotorcycle } from "react-icons/fa";

const TravelPlansPage = () => {
  const navigate = useNavigate();

  const travelPlans = [
    {
      id: 1,
      mode: "Car",
      source: "New York",
      destination: "Boston",
      startTime: "2024-12-25 08:00 AM",
      arrivalTime: "2024-12-25 12:00 PM",
    },
    {
      id: 2,
      mode: "Train",
      source: "Chicago",
      destination: "Seattle",
      startTime: "2024-12-26 09:00 AM",
      arrivalTime: "2024-12-26 09:00 PM",
    },
  ];

  const getIcon = (mode) => {
    switch (mode) {
      case "Car":
        return <FaCar className="text-2xl text-blue-500" />;
      case "Train":
        return <FaTrain className="text-2xl text-green-500" />;
      case "Bus":
        return <FaBus className="text-2xl text-red-500" />;
      case "Bike":
        return <FaMotorcycle className="text-2xl text-yellow-500" />;
      default:
        return null;
    }
  };

  const handleCardClick = (plan) => {
    navigate(`/travel-details/${plan.id}`, { state: plan });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Available Travel Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {travelPlans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => handleCardClick(plan)}
            className="cursor-pointer bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow flex items-center space-x-4"
          >
            <div>{getIcon(plan.mode)}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {plan.source} ➡ {plan.destination}
              </h3>
              <p className="text-gray-600 mt-2">
                <strong>Timing:</strong> {plan.startTime} - {plan.arrivalTime}
              </p>
              <p className="mt-2 text-sm text-blue-500 hover:underline">
                View Details
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelPlansPage;
