import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Premium Headphones',
    description: 'High-quality noise-cancelling headphones with Bluetooth connectivity',
    price: 199.99,
    image: 'https://via.placeholder.com/200x200?text=Headphones',
  },
  {
    id: 2,
    name: 'Smart Watch',
    description: 'Feature-rich smart watch with health tracking',
    price: 149.99,
    image: 'https://via.placeholder.com/200x200?text=Smart+Watch',
  },
  {
    id: 3,
    name: 'Wireless Speaker',
    description: 'Portable Bluetooth speaker with long battery life',
    price: 79.99,
    image: 'https://via.placeholder.com/200x200?text=Speaker',
  },
];

const Products = () => {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-xl font-bold text-blue-600">${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Products;
