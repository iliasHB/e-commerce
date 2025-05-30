import {create} from 'zustand';

// Define the Product type (if not already defined elsewhere)
type Product = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
};

// Define the store state and actions
type CartStore = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void
};

const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter((product) => product.id !== id),
  })),
  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;


// import { create } from "zustand";
// // Define the Product type (if not already defined elsewhere)
// type Product = {
//     id: string;
//     name: string;
//     imageUrl: string;
//     price: number;
//   };
  
//   // Define the store state and actions
//   type CartStore = {
//     cart: Product[];
//     addToCart: (product: Product) => void;
//     removeFromCart: (id: string) => void;
//   };
// const useCartStore = create((set) => ({
//   cart: [],

//   // Add to Cart
//   addToCart: (product) =>
//     set((state) => {
//       const existingItem = state.cart.find((item) => item.id === product.id);
//       if (existingItem) {
//         return {
//           cart: state.cart.map((item) =>
//             item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//           ),
//         };
//       } else {
//         return { cart: [...state.cart, { ...product, quantity: 1 }] };
//       }
//     }),

//   // Remove from Cart
//   removeFromCart: (id) =>
//     set((state) => ({
//       cart: state.cart.filter((item) => item.id !== id),
//     })),

//   // Clear Cart
//   clearCart: () => set({ cart: [] }),
// }));

// export default useCartStore;
