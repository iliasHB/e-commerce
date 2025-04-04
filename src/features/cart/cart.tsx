'use client'
import useCartStore from "@/components/store/cart-store";
import { Button } from "@headlessui/react";
import { TrashIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export function CartPage() {
  const { cart, removeFromCart, clearCart } = useCartStore();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={`${item.id}-${index}`} className="flex justify-between items-center border-b py-2">
                             <div className="flex items-center space-x-6 ">
                <Image src={item.imageUrl} alt={item.name} width={100} height={100} className="rounded-md" />
                {/* <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded" /> */}
                 <div>
                   <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                   <p className="text-sm text-gray-600">Price: ${item.price}</p>
                   <p className="text-sm text-gray-600">Quantity: 1</p>
                 </div>
               </div>
               <div className="flex flex-col items-end space-y-2">
                 <p className="text-lg font-semibold text-gray-900">${(item.price * 1).toFixed(2)}</p>
                 <Button 
                 onClick={() => removeFromCart(item.id)}
                 className="text-red-600 hover:text-red-800"> <TrashIcon className="w-5 h-5 mr-2" />
                 </Button>
               </div>
              
              </li>
            ))}
          </ul>

          <button onClick={clearCart} className="mt-4 bg-gray-700 text-white px-4 py-2 rounded-lg">
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;


// import useCartStore from "@/components/store/cart-store";


// const CartPage = () => {
//   const { cart, removeFromCart, clearCart } = useCartStore();

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <ul>
//             {cart.map((item) => (
//               <li key={item.id} className="flex justify-between items-center border-b py-2">
//                 <span>{item.name} (x{item.quantity}) - ${item.price * item.quantity}</span>
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <button onClick={clearCart} className="mt-4 bg-gray-700 text-white px-4 py-2 rounded-lg">
//             Clear Cart
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default CartPage;






// import useCartStore from '@/components/store/cart-store';
// import React from 'react';

// const CartPage = () => {

//   const { cart, removeFromCart, clearCart } = useCartStore();
//   // Sample cart items
//   const cartItems = [
//     { id: 1, name: "Product 1", price: 25.99, quantity: 1, imageUrl: "https://via.placeholder.com/150" },
//     { id: 2, name: "Product 2", price: 50.49, quantity: 2, imageUrl: "https://via.placeholder.com/150" },
//     { id: 3, name: "Product 3", price: 30.00, quantity: 1, imageUrl: "https://via.placeholder.com/150" },
//   ];

//   // Calculate total price
//   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-2xl font-semibold text-gray-800 my-8">Your Shopping Cart</h1>

//         {/* Cart Items */}
//         <div className="space-y-2">
//           {cartItems.map((item) => (
//             <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
//               <div className="flex items-center space-x-6 ">
//                 <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded" />
//                 <div>
//                   <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
//                   <p className="text-sm text-gray-600">Price: ${item.price}</p>
//                   <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
//                 </div>
//               </div>
//               <div className="flex flex-col items-end space-y-2">
//                 <p className="text-lg font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
//                 <button className="text-red-600 hover:text-red-800">Remove</button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Cart Summary */}
//         <div className="bg-white p-4 mt-8 rounded-lg shadow-md">
//           <div className="flex justify-between items-center">
//             <h2 className="text-xl font-semibold text-gray-800">Cart Summary</h2>
//             <p className="text-lg font-semibold text-gray-800">Total: ${totalPrice.toFixed(2)}</p>
//           </div>

//           {/* Actions */}
//           <div className="mt-6 flex justify-between items-center">
//             <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Continue Shopping</button>
//             <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500">Proceed to Checkout</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
