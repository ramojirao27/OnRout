import React from 'react'

export default function () {
  return (
   <>
          <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-indigo-800 mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          <div className="text-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">1. Post Your Delivery</h3>
            <p className="text-gray-700">
              Senders can post details about their delivery request, including the pickup and drop-off locations.
            </p>
          </div>
          <div className="text-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">2. Find Travelers</h3>
            <p className="text-gray-700">
              Travelers browse delivery requests and choose ones that match their routes and schedule.
            </p>
          </div>
          <div className="text-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">3. Complete the Delivery</h3>
            <p className="text-gray-700">
              Travelers pick up the parcel and ensure it is delivered safely and on time.
            </p>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 px-6 bg-indigo-50">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-indigo-800 mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Flexible Delivery</h3>
            <p className="text-gray-700">
              Travelers choose when and where they want to deliver, providing flexibility for both senders and travelers.
            </p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Affordable Rates</h3>
            <p className="text-gray-700">
              Save on shipping costs with flexible pricing based on the traveler’s route and package size.
            </p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Secure & Trusted</h3>
            <p className="text-gray-700">
              We ensure the safety of senders and travelers through account verification and trusted delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Deliveries Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-indigo-800 mb-12">
          Featured Deliveries
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-72 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Package from NYC to LA</h3>
            <p>Looking for a traveler to carry a medium-sized package from NYC to LA.</p>
          </div>
          <div className="w-72 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Books from Miami to Chicago</h3>
            <p>Transport a small box of books from Miami to Chicago.</p>
          </div>
          <div className="w-72 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Gifts from London to Paris</h3>
            <p>Need someone to carry gifts from London to Paris, light and easy to transport.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
   </>
  )
}
