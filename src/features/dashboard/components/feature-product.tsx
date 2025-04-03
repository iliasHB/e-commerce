import Image from 'next/image';
import { ShoppingCartIcon, StarIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import useCartStore from '@/components/store/cart-store';
import { Button } from '@headlessui/react';

// Define the product type
type Product = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
};

type FeatureProductProps = {
  products: Product[]; // Type the products prop as an array of Product objects
};

const FeatureProduct: React.FC<FeatureProductProps> = ({ products }) => {
  const { addToCart } = useCartStore();
  const handleAddToCart = (product: Product) => {
    alert(`Added to cart Successfully!`)
    // Convert id to string when passing to cart
    const productWithStringId = {
      ...product,
      id: product.id.toString(), // Convert the id to a string
    };
    addToCart(productWithStringId); // Add the product to the cart
  };
  return (
    <div>
      {/* Featured Products */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {products.slice(0, 4).map((product) => (


            <div key={product.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
              <Link href={`/order?id=${product.id}`} passHref>
                <div className="cursor-pointer">

                  <Image src={product.imageUrl} alt={product.name} width={200} height={200} className="rounded-md" />
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, index) => (
                      <StarIcon key={index} className={`w-5 h-5 ${index < 4 ? 'text-yellow-500' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  
                </div>
              </Link>
              <Button 
                  onClick={() => handleAddToCart(product)}
                  className="mt-4 flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    <ShoppingCartIcon className="w-5 h-5 mr-2" /> Add to Cart
                  </Button>
            </div>


          ))}
        </div>
      </section>
    </div>
  )
}

export default FeatureProduct;