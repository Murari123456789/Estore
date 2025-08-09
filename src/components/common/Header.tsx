import { FC } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";
import logo from "../../assets/logo.png";

const Header: FC = () => {
  return (
    <header className="bg-[#0D1525] text-white px-6 py-3 flex items-center justify-between">
      {/* Logo + Nav */}
      <div className="flex items-center space-x-8">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="SM Electronics" className="h-8 w-auto" />
        </Link>

        <nav className="flex space-x-6">
          <Link to="/" className="font-medium hover:text-gray-300">Home</Link>
          <Link to="/products" className="font-medium hover:text-gray-300">Products</Link>
        </nav>
      </div>

      {/* Search */}
      <div className="flex items-center flex-1 max-w-md mx-6">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <Link to="/cart" className="hover:text-gray-300">
          <ShoppingCart size={22} />
        </Link>
        <Link
          to="/signin"
          className="flex items-center space-x-1 px-3 py-1.5 bg-white text-black rounded-md hover:bg-gray-200"
        >
          <User size={18} />
          <span>Sign In</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
