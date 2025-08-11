import React, { useState } from "react";
import { mockProducts } from "../utils/mockData";
import { useCart } from "../context/CartContext";

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // items per page
  const { addToCart } = useCart();

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(mockProducts.map((p) => p.category)))];

  // Filter products
  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>

      {/* Search & Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // reset page when searching
          }}
          className="border rounded-lg px-4 py-2 w-full sm:w-1/2 focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setCurrentPage(1); // reset page when filtering
          }}
          className="border rounded-lg px-4 py-2 w-full sm:w-1/4 focus:ring-2 focus:ring-blue-400"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Products Grid */}
      {currentProducts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <div
                key={product._id}
                className="border rounded-lg shadow-md hover:shadow-xl transition duration-300 p-4 bg-white flex flex-col"
              >
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md transition-transform transform hover:scale-105"
                />
                <h2 className="text-lg font-semibold mt-3 line-clamp-1">{product.title}</h2>
                <p className="text-sm text-gray-500">{product.brand}</p>
                <p className="mt-2 text-blue-600 font-bold">${product.price}</p>
                {product.isOnSale && (
                  <span className="text-red-500 text-sm font-semibold">
                    {product.discountPercentage}% OFF
                  </span>
                )}
                <p className="text-sm mt-2 text-gray-600 line-clamp-2">{product.description}</p>
                <p className="mt-2 text-yellow-500">⭐ {product.totalrating} / 5</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === index + 1
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-500">No products found.</p>
      )}
    </div>
  );
};

export default Products;