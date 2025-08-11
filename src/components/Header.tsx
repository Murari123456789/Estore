import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import Logo from './Logo';

const isActive = (path: string, location: string) => {
  return path === location || (path === '/' && location === '/');
};

const Header = () => {
  const { currentUser, logout } = useAuth();
  const [, setSearchTerm] = useState("");
  const { cart } = useCart();
  const cartCount = cart.reduce((sum,item) => sum + item.quantity,0);
  const location = useLocation();
  
 {currentUser ? (
    <button
      onClick={logout}
      className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200"
    >
      <User className="h-4 w-4" />
      <span>Logout</span>
    </button>
  ) : (
    <Link to="/sign-in" className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200">
      <User className="h-4 w-4" />
      <span>Sign In</span>
    </Link>
  )}
    {currentUser ? (
    <button
      onClick={logout}
      className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200"
    >
      <User className="h-4 w-4" />
      <span>Logout</span>
    </button>
  ) : (
    <Link to="/sign-in" className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200">
      <User className="h-4 w-4" />
      <span>Sign In</span>
    </Link>
  )}
  useEffect(() => {
    // Clear search term when navigating away from search results
    if (location.pathname !== '/products') {
      setSearchTerm('');
    }
  }, [location.pathname]);


  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo className="h-8 w-auto" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className={`hover:text-blue-400 transition-colors ${isActive('/', location.pathname) ? 'text-blue-400' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={`hover:text-blue-400 transition-colors ${isActive('/products', location.pathname) ? 'text-blue-400' : ''}`}
          >
            Products
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/cart" className="relative p-2 hover:text-blue-400 cart-icon">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
                </span>
            )}
          </Link>
                    {currentUser ? (
            <button
              onClick={logout}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200"
            >
              <User className="h-4 w-4" />
              <span>Logout</span>
            </button>
          ) : (
            <div className="flex space-x-2">
              <Link
                to="/sign-in"
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200"
              >
                <User className="h-4 w-4" />
                <span>Sign In</span>
              </Link>
              <Link
                to="/sign-up"
                className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                <User className="h-4 w-4" />
                <span>Sign Up</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;