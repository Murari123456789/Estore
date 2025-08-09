import { useState, useEffect } from 'react';
import type { Product } from '../utils/types';
import { mockProducts } from '../utils/mockData';

const Products = () => {
  const [products, setProducts] = useState<Product[]>(mockProducts);

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-8">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">${product.price}</span>
                {product.isOnSale && (
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                    {product.discountPercentage}% off
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
