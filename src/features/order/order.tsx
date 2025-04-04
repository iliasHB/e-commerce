'use client';

// Your existing OrderPage component
import products from '@/components/data/product';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '@headlessui/react';

// Define the Product type
type Product = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
};

export function OrderPage() {
  const router = useRouter();
  const searchParam = useSearchParams();
  const id = searchParam.get('id');
  const [product, setProduct] = useState<Product | null>(null);
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  useEffect(() => {
    if (id) {
      const foundProduct = products.find((p) => p.id === Number(id));
      if (foundProduct) {
        const productWithStringId: Product = { 
          ...foundProduct, 
          id: String(foundProduct.id) 
        };
        setProduct(productWithStringId);
      }
    }
  }, [id]);

  if (!product) {
    return <p className="text-center mt-10 text-gray-700">Loading product details...</p>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleShopNow = () => {
    router.push('/shop-now');
  };

  const handlePlaceOrder = () => {
    alert(`Order placed successfully! \n${product.name} \n ${product.price}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-800 my-8">Your Order</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Details</h2>
            <Image src={product.imageUrl} alt={product.name} width={200} height={200} className="rounded-md" />
            <h1 className="text-2xl font-bold text-gray-800 mt-4">{product.name}</h1>
            <p className="text-gray-600 text-lg">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-600">Quantity: 1</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Shipping Information</h2>
            <div className="space-y-4">
              {["name", "address", "city", "postalCode", "country"].map((field) => (
                <input
                  key={field}
                  type="text"
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={shippingInfo[field as keyof typeof shippingInfo]}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 mt-8 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>
            <p className="text-lg font-semibold text-gray-800">Total: ${product.price.toFixed(2)}</p>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <Button
              onClick={handleShopNow}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
              Continue Shopping
            </Button>
            <Button
              onClick={handlePlaceOrder}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500">
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Wrap your OrderPage in Suspense
export default OrderPage;
