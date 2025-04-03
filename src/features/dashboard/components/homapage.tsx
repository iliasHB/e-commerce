'use client';

import Link from 'next/link';
import products from '@/components/data/product';
import FeatureProduct from './feature-product';


export default function HomePage() {
  const convertedProducts = products.map(product => ({
    ...product,
    id: product.id.toString(), // Convert the id to a string
  }));
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative bg-gray-100 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Welcome to Our Store</h1>
          <p className="mt-4 text-gray-600">Find the best products at unbeatable prices.</p>
          <Link href="/shop-now" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
            Shop Now
          </Link>
        </div>

        <FeatureProduct products={convertedProducts} />

      </main>
      

    </div>
  );
}


 {/* <FeatureProduct /> */}
        
        {/* Featured Products
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {products.map((product) => (
              <div key={product.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
                <Image src={product.image} alt={product.name} width={200} height={200} className="rounded-md" />
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} className={`w-5 h-5 ${index < product.rating ? 'text-yellow-500' : 'text-gray-300'}`} />
                  ))}
                </div>
                <button className="mt-4 flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  <ShoppingCartIcon className="w-5 h-5 mr-2" /> Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section> */}