import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Search, User } from "lucide-react";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          SM Electronics
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link to="/products" className="hover:text-blue-400 transition-colors">
            Products
          </Link>
        </nav>

        {/* Search */}
        <form onSubmit={handleSearch} className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 rounded-md bg-white text-black focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/cart" className="relative p-2 hover:text-blue-400">
            <ShoppingCart className="h-5 w-5" />
          </Link>
          <Link to="/sign-in" className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200">
            <User className="h-4 w-4" />
            <span>Sign In</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;