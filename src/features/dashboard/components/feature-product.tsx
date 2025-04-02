import Image from 'next/image';
import { ShoppingCartIcon, StarIcon } from '@heroicons/react/24/solid';

const products = [
  { id: 1, name: 'Itel Phone', price: '$29.99', image: '/assets/electronics/itel.jpeg', rating: 4 },
  { id: 2, name: '3 in 1 shirt', price: '$49.99', image: '/assets/fashion/3in1shirt.jpeg', rating: 5 },
  { id: 3, name: 'Air Fryer', price: '$19.99', image: '/assets/home-appliances/air-fryer.jpeg', rating: 3 },
  { id: 4, name: 'Smart Tv', price: '$39.99', image: '/assets/electronics/letv.jpeg', rating: 4 },
];

export function FeatureProduct(){
    
    return (
        <div>
        {/* Featured Products */}
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
        </section>
        </div>
    )
}