'use client'
import React, { useState } from 'react';

// Sample cart items for the order
const orderItems = [
  { id: 1, name: "Product 1", price: 25.99, quantity: 1, imageUrl: "https://via.placeholder.com/150" },
  { id: 2, name: "Product 2", price: 50.49, quantity: 2, imageUrl: "https://via.placeholder.com/150" },
  { id: 3, name: "Product 3", price: 30.00, quantity: 1, imageUrl: "https://via.placeholder.com/150" },
];

const OrderPage = () => {
  // State for shipping details
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  // Calculate total price
  const totalPrice = orderItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle input changes for shipping info
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle order submission
  const handlePlaceOrder = () => {
    console.log('Order placed!', shippingInfo, orderItems, totalPrice);
    // Add logic for placing the order, like API calls to backend
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-800 my-8">Your Order</h1>

        {/* Order Details */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Details</h2>

          <div className="space-y-4">
            {orderItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow-sm">
                <div className="flex items-center space-x-6">
                  <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-sm text-gray-600">Price: ${item.price}</p>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <p className="text-lg font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Information */}
        <div className="bg-white p-4 mt-8 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Shipping Information</h2>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={shippingInfo.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={shippingInfo.address}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={shippingInfo.city}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={shippingInfo.postalCode}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={shippingInfo.country}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 mt-8 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>
            <p className="text-lg font-semibold text-gray-800">Total: ${totalPrice.toFixed(2)}</p>
          </div>

          {/* Actions */}
          <div className="mt-6 flex justify-between items-center">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
              Continue Shopping
            </button>
            <button
              onClick={handlePlaceOrder}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
