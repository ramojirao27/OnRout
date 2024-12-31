import React from "react";

const items = [
  { id: 1, name: "Laptop", price: "$1000", image: "https://via.placeholder.com/300" },
  { id: 2, name: "Smartphone", price: "$600", image: "https://via.placeholder.com/300" },
  { id: 3, name: "Headphones", price: "$150", image: "https://via.placeholder.com/300" },
  { id: 4, name: "Smartwatch", price: "$250", image: "https://via.placeholder.com/300" },
  { id: 5, name: "Keyboard", price: "$50", image: "https://via.placeholder.com/300" },
  { id: 6, name: "Mouse", price: "$30", image: "https://via.placeholder.com/300" },
];

const productsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-screen-xl mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">E-Commerce Shop</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-lg text-gray-700">{item.price}</p>
                <button className="mt-4 w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default productsPage;
