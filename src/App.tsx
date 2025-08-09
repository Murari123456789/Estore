import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Welcome to SM Electronics
            </h1>
            <p className="text-xl text-gray-600 text-center">
              Your electronics shopping destination
            </p>
          </div>} />
          <Route path="/products" element={<div>Products Page</div>} />
          <Route path="/cart" element={<div>Cart Page</div>} />
          <Route path="/signin" element={<div>Sign In Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
