import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Header() {
  const { cartItems } = useCart();

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
    
      <Link to="/" className="text-2xl font-bold text-blue-600">MiniShop</Link>
      <nav className="space-x-6">
        <Link to="/" className="text-blue-600 font-medium">Home</Link>
        <Link to="/cart" className="relative text-blue-600 font-medium">
          🛒 Cart
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
