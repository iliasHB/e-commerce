'use client'

import products from "@/components/data/product";
import Link from "next/link";
import React, { useState } from "react";
import Image from 'next/image';
import { Button } from "@headlessui/react";
import useCartStore from "@/components/store/cart-store";
const categories = ["All", "Electronics", "Fashion", "Home Appliances"];

const ShopNow = () => {
  const { addToCart } = useCartStore(); 
  const [cart, setCart] = useState<{ id: number; name: string; price: number; imageUrl: string }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products based on category
  const filteredProducts = selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory);

 
  const handleAddToCart = (product: { id: number; name: string; price: number; imageUrl: string }) => {
    alert(`Added to cart Successfully!`)
    // Convert id to string when passing to cart
    const productWithStringId = {
      ...product,
      id: product.id.toString(), // Convert the id to a string
    };
    addToCart(productWithStringId); // Add the product to the cart
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
                className={`w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition ${selectedCategory === category ? "bg-gray-200 font-semibold" : ""
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
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              {/* Wrap image and title in Link */}
              <Link href={`/order?id=${product.id}`} passHref>
                <div className="cursor-pointer">
                  {/* <Image /> */}
                  <Image src={product.imageUrl} alt={product.name} width={200} height={200} className="rounded-md" />
              
                  <h2 className="text-lg font-semibold text-gray-800 mt-3">
                    {product.name}
                  </h2>
                </div>
              </Link>

              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <Button
                onClick={() => handleAddToCart(product)}
                className="mt-3 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition duration-300"
              >
                Add to Cart
              </Button>
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


  {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
        </div> */}