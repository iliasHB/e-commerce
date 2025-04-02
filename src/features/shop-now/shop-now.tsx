'use client'

import React, { useState } from "react";

// Sample product data
// const products = [
//   { id: 1, name: "CCTV", category: "Electronics", price: 899.99, imageUrl: "/assets/electronics/cctv.jpeg" },
//   { id: 2, name: "Smartphone", category: "Electronics", price: 599.99, imageUrl: "/assets/electronics/techno.jpeg" },
//   { id: 3, name: "Shoes", category: "Fashion", price: 49.99, imageUrl: "/assets/electronics/shoe.jpeg" },
//   { id: 4, name: "Shirt", category: "Fashion", price: 79.99, imageUrl: "/assets/electronics/cct-shirt.jpeg" },
//   { id: 5, name: "Microwave", category: "Home Appliances", price: 120.00, imageUrl: "/assets/electronics/microwave.jpeg" },
//   { id: 6, name: "Refrigerator", category: "Home Appliances", price: 499.00, imageUrl: "/assets/electronics/refregerator" },
// ];


const products = [
    { id: 1, name: "CCTV", category: "Electronics", price: 899.99, imageUrl: "/assets/electronics/cctv.jpeg" },
    { id: 2, name: "Smartphone", category: "Electronics", price: 599.99, imageUrl: "/assets/electronics/stand.jpg" },
    { id: 3, name: "Door Bell", category: "Electronics", price: 899.99, imageUrl: "/assets/electronics/doorbell-video.jpeg" },
    { id: 4, name: "Techno POP 6", category: "Electronics", price: 599.99, imageUrl: "/assets/electronics/techno.jpeg" },
    { id: 5, name: "Hisense Tv", category: "Electronics", price: 899.99, imageUrl: "/assets/electronics/hisense.jpeg" },
    { id: 6, name: "Home Theater", category: "Electronics", price: 599.99, imageUrl: "/assets/electronics/hometheater.jpeg" },
    { id: 7, name: "Smart Itel", category: "Electronics", price: 899.99, imageUrl: "/assets/electronics/itel.jpeg" },
    { id: 8, name: "Letv", category: "Electronics", price: 599.99, imageUrl: "/assets/electronics/letv.jpeg" },
    { id: 9, name: "Smart TV", category: "Electronics", price: 899.99, imageUrl: "/assets/electronics/smartHD-TV.jpeg" },
    { id: 10, name: "Techno C10", category: "Electronics", price: 599.99, imageUrl: "/assets/electronics/techno-pop.jpeg" },
    { id: 11, name: "Wall Mount Network", category: "Electronics", price: 899.99, imageUrl: "/assets/electronics/wallmount-network.jpeg" },
    { id: 12, name: "Zealot", category: "Electronics", price: 599.99, imageUrl: "/assets/electronics/zealos.jpeg" },
    { id: 13, name: "Shoes", category: "Fashion", price: 49.99, imageUrl: "/assets/fashion/shoe.jpeg" },
    { id: 14, name: "Thirt", category: "Fashion", price: 79.99, imageUrl: "/assets/fashion/t-shirt.jpeg" },
  
    { id: 17, name: "3 in 1 shirt", category: "Fashion", price: 49.99, imageUrl: "/assets/fashion/3in1shirt.jpeg" },
    { id: 18, name: "Shirt", category: "Fashion", price: 79.99, imageUrl: "/assets/fashion/3in1shirt.jpeg" },
  
    { id: 19, name: "Bracelet", category: "Fashion", price: 49.99, imageUrl: "/assets/fashion/bracelet.jpeg" },
    { id: 20, name: "Coperate Shirt", category: "Fashion", price: 79.99, imageUrl: "/assets/fashion/coperate-shirt.jpeg" },
  
    { id: 21, name: "Earing", category: "Fashion", price: 49.99, imageUrl: "/assets/fashion/earing.jpeg" },
    { id: 22, name: "Bracelet", category: "Fashion", price: 79.99, imageUrl: "/assets/fashion/fashion-braclet.jpeg" },
  
    { id: 23, name: "Hoody", category: "Fashion", price: 49.99, imageUrl: "/assets/fashion/hoody.jpeg" },
    { id: 24, name: "Knacke Ring", category: "Fashion", price: 79.99, imageUrl: "/assets/fashion/knackle-ring.jpeg" },
  
    { id: 25, name: "Sneaker", category: "Fashion", price: 49.99, imageUrl: "/assets/fashion/sneaker.jpeg" },
    { id: 26, name: "Top and Short", category: "Fashion", price: 79.99, imageUrl: "/assets/fashion/up$downshirt-ring.jpeg" },
  
    { id: 27, name: "Microwave", category: "Home Appliances", price: 120.00, imageUrl: "/assets/home-appliances/microwave.jpeg" },
    { id: 28, name: "Refrigerator", category: "Home Appliances", price: 499.00, imageUrl: "/assets/home-appliances/refregerator.jpeg" },
    { id: 29, name: "Air Fryer", category: "Home Appliances", price: 120.00, imageUrl: "/assets/home-appliances/air-cook.jpeg" },
    { id: 30, name: "Air Fryer 1.5inch", category: "Home Appliances", price: 499.00, imageUrl: "/assets/home-appliances/air-fryer.jpeg" },
  
    { id: 31, name: "Blender", category: "Home Appliances", price: 120.00, imageUrl: "/assets/home-appliances/blender.jpeg" },
    { id: 32, name: "Blender 1.5inch", category: "Home Appliances", price: 499.00, imageUrl: "/assets/home-appliances/blenda.jpeg" },
  
    { id: 33, name: "Burner", category: "Home Appliances", price: 120.00, imageUrl: "/assets/home-appliances/burner.jpeg" },
    { id: 34, name: "Burner Hot", category: "Home Appliances", price: 499.00, imageUrl: "/assets/home-appliances/bunner.jpeg" },
  
    { id: 35, name: "Cooking Pot", category: "Home Appliances", price: 120.00, imageUrl: "/assets/home-appliances/cooking-pot.jpeg" },
    { id: 36, name: "Electric Cooker", category: "Home Appliances", price: 499.00, imageUrl: "/assets/home-appliances/electric-cooker.jpeg" },
  
    { id: 37, name: "Gas Cooker", category: "Home Appliances", price: 120.00, imageUrl: "/assets/home-appliances/gas-cooker.jpeg" },
    { id: 38, name: "Juice Blender", category: "Home Appliances", price: 499.00, imageUrl: "/assets/home-appliances/juice-blender.jpeg" },
  
    { id: 39, name: "Cutteries", category: "Home Appliances", price: 120.00, imageUrl: "/assets/home-appliances/kitching-util.jpeg" },
    { id: 40, name: "Microwave", category: "Home Appliances", price: 499.00, imageUrl: "/assets/home-appliances/microwave.jpeg" },
  
    { id: 41, name: "Polystar", category: "Home Appliances", price: 120.00, imageUrl: "/assets/home-appliances/polystar.jpeg" },
    { id: 42, name: "Refrigerator", category: "Home Appliances", price: 499.00, imageUrl: "/assets/home-appliances/refregerator.jpeg" },
  
    { id: 43, name: "Ring", category: "Home Appliances", price: 120.00, imageUrl: "/assets/home-appliances/ring.jpeg" },
    { id: 44, name: "Juice Blender", category: "Home Appliances", price: 499.00, imageUrl: "/assets/home-appliances/blender.jpeg" },
  
  ];
const categories = ["All", "Electronics", "Fashion", "Home Appliances"];

const ShopNow = () => {
  const [cart, setCart] = useState<{ id: number; name: string; price: number; imageUrl: string }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products based on category
  const filteredProducts = selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory);

  // Add item to cart
  const addToCart = (product: { id: number; name: string; price: number; imageUrl: string }) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar for Categories */}
      <aside className="w-64 bg-white shadow-md p-2">
      <h2 className="text-1xl font-semibold text-gray-800 text-left">Shop Now</h2>
        <h2 className="text-1xl pt-6 font-semibold text-gray-800">Categories</h2>
        <ul className="mt-4 space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition ${
                  selectedCategory === category ? "bg-gray-200 font-semibold" : ""
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <h1 className="text-3xl font-semibold text-gray-800 my-8 text-center">Shop Now</h1> */}


        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded-md" />
              <h2 className="text-lg font-semibold text-gray-800 mt-3">{product.name}</h2>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-3 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="bg-white p-6 mt-8 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Cart Summary</h2>
          <p className="text-gray-600">Items in Cart: {cart.length}</p>
          <p className="text-gray-800 font-semibold">
            Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopNow;
