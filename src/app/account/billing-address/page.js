"use client";
import React from "react";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";

const Billing = () => {
  // Dummy billing addresses
  const billingAddresses = [
    {
      id: 1,
      name: "Hasan Khan",
      address: "123, Rose Garden, Banjara Hills",
      city: "Hyderabad",
      state: "Telangana",
      zip: "500034",
      phone: "9876543210",
      country: "India",
      default: true,
    },
    {
      id: 2,
      name: "Hasan Khan",
      address: "45, Palm Street, Jubilee Hills",
      city: "Hyderabad",
      state: "Telangana",
      zip: "500033",
      phone: "9876543211",
      country: "India",
      default: false,
    },
  ];

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6 mt-20">My Billing Addresses</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {billingAddresses.map((address) => (
            <div
              key={address.id}
              className="bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition"
            >
              {address.default && (
                <span className="text-sm bg-pink-100 text-pink-600 px-2 py-1 rounded-full font-semibold mb-2 inline-block">
                  Default
                </span>
              )}
              <h2 className="font-semibold text-lg mb-2">{address.name}</h2>
              <p>{address.address}</p>
              <p>
                {address.city}, {address.state} - {address.zip}
              </p>
              <p>{address.country}</p>
              <p>Phone: {address.phone}</p>
              <div className="mt-4 flex gap-2">
                <button className="bg-pink-600 text-white px-4 py-1 rounded hover:bg-pink-700 transition">
                  Edit
                </button>
                <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded hover:bg-gray-300 transition">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
            Add New Billing Address
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Billing;
