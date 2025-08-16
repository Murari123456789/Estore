export const mockProducts = [
  {
    _id: "1",
    title: "Apple iPhone 14 Pro",
    description: "The latest iPhone with A16 Bionic chip, Super Retina XDR display",
    price: 999.99,
    category: "Mobile Phones",
    brand: "Apple",
    color: "Silver",
    stock: 10,
    images: ["/src/assets/images/placeholder.jpg"],
    ratings: [],
    totalrating: 0,
    featured: true,
    newArrival: true,
    isOnSale: true,
    discountPercentage: 10
  },
  {
    _id: "2",
    title: "Samsung Galaxy S23",
    description: "Premium Android smartphone with Snapdragon processor",
    price: 899.99,
    category: "Mobile Phones",
    brand: "Samsung",
    color: "Black",
    stock: 15,
    images: ["/src/assets/images/placeholder.jpg"],
    ratings: [],
    totalrating: 0,
    featured: true,
    newArrival: true
  },
  {
    _id: "3",
    title: "Sony WH-1000XM5",
    description: "Industry-leading noise cancellation headphones",
    price: 399.99,
    category: "Headphones",
    brand: "Sony",
    color: "Black",
    stock: 20,
    images: ["/src/assets/images/placeholder.jpg"],
    ratings: [],
    totalrating: 0,
    featured: true
  },
  {
  _id: "4",
    title: "iPhone 15 Pro",
    description: "Apple's latest flagship with A17 Pro chip, titanium design, and advanced camera system.",
    price: 1199,
    category: "Mobile Phone",
    brand: "Apple",
    color: "Natural Titanium",
    stock: 25,
    images: [],
    ratings: [
      { star: 5, comment: "Incredible phone!", postedBy: "User123" },
      { star: 4, comment: "Pricey but worth it.", postedBy: "User456" }
    ],
    totalrating: 4.5,
    featured: true,
    newArrival: true
  },
  {
    _id: "5",
    title: "Samsung Galaxy S24 Ultra",
    description: "High-end Android flagship with powerful camera zoom and Snapdragon 8 Gen 3 chip.",
    price: 1299,
    category: "Mobile Phone",
    brand: "Samsung",
    color: "Phantom Black",
    stock: 30,
    images: [],
    ratings: [
      { star: 5, comment: "Best Android phone yet!", postedBy: "User789" }
    ],
    totalrating: 5,
    featured: true
  },
  {
    _id: "6",
    title: "MacBook Air M3",
    description: "Lightweight laptop with M3 chip, long battery life, and fanless design.",
    price: 1499,
    category: "Laptop",
    brand: "Apple",
    color: "Space Gray",
    stock: 15,
    images: [],
    ratings: [
      { star: 4, comment: "Perfect for students.", postedBy: "User222" }
    ],
    totalrating: 4,
    newArrival: true
  },
  {
    _id: "7",
    title: "Dell XPS 15",
    description: "Premium Windows laptop with OLED display and RTX 4050 GPU.",
    price: 1699,
    category: "Laptop",
    brand: "Dell",
    color: "Silver",
    stock: 12,
    images: [],
    ratings: [
      { star: 5, comment: "Amazing display quality.", postedBy: "User333" }
    ],
    totalrating: 4.8
  },
  {
    _id: "8",
    title: "AirPods Pro (4th Gen)",
    description: "Active noise cancellation, spatial audio, and MagSafe charging.",
    price: 249,
    category: "Earbuds",
    brand: "Apple",
    color: "White",
    stock: 50,
    images: [],
    ratings: [
      { star: 5, comment: "Best earbuds I've owned.", postedBy: "User444" }
    ],
    totalrating: 5,
    isOnSale: true,
    discountPercentage: 10
  },
  {
   _id: "9",
    title: "Logitech MX Master 3S",
    description: "Premium ergonomic wireless mouse with MagSpeed scroll.",
    price: 99,
    category: "Accessories",
    brand: "Logitech",
    color: "Graphite",
    stock: 60,
    images: [],
    ratings: [
      { star: 5, comment: "Super smooth scrolling.", postedBy: "User102" }
    ],
    totalrating: 4.8,
    isOnSale: true,
    discountPercentage: 15
  },
  {
        _id: "10",
    title: "LG OLED C3 55\" TV",
    description: "4K OLED smart TV with Dolby Vision and 120Hz refresh rate.",
    price: 1499,
    category: "Television",
    brand: "LG",
    color: "Black",
    stock: 8,
    images: [],
    ratings: [
      { star: 5, comment: "Stunning picture quality.", postedBy: "User101" }
    ],
    totalrating: 5
  }
];