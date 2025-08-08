import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingCart } from 'lucide-react';
import Layout from '../components/layout/Layout';

const HomePage: React.FC = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 199.99,
      rating: 4.8,
      image: '/products/headphones.jpg',
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 299.99,
      rating: 4.6,
      image: '/products/watch.jpg',
      category: 'Electronics'
    },
    {
      id: 3,
      name: 'Organic Cotton T-Shirt',
      price: 29.99,
      rating: 4.7,
      image: '/products/tshirt.jpg',
      category: 'Clothing'
    },
    {
      id: 4,
      name: 'Designer Coffee Mug',
      price: 19.99,
      rating: 4.9,
      image: '/products/mug.jpg',
      category: 'Home & Garden'
    }
  ];

  const categories = [
    { name: 'Electronics', icon: '📱', count: 150 },
    { name: 'Clothing', icon: '👕', count: 89 },
    { name: 'Home & Garden', icon: '🏠', count: 67 },
    { name: 'Sports', icon: '⚽', count: 45 },
    { name: 'Books', icon: '📚', count: 234 },
    { name: 'Beauty', icon: '💄', count: 78 }
  ];

  return (
    <Layout isHomePage={true}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Discover Amazing Products
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Shop the latest trends with unbeatable prices and fast delivery. 
                Your one-stop destination for quality products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/categories"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Browse Categories
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="/hero-image.jpg" 
                alt="Shopping" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 text-lg">
              Find exactly what you're looking for in our organized categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/categories/${category.name.toLowerCase().replace(' & ', '-')}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} items</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Featured Products
              </h2>
              <p className="text-gray-600">
                Handpicked products you'll love
              </p>
            </div>
            <Link
              to="/products"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
            >
              View All
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                    <ShoppingCart className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">${product.price}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Subscribe to our newsletter for exclusive offers and updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage; 