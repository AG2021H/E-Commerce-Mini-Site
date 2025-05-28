import { createContext, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    let message = '';
    setCartItems((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      message = `${product.name} added to cart`;
      return [...prev, { ...product, quantity: 1 }];
    });
    setTimeout(() => toast.success(message), 0);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const existing = prev.find(item => item.id === id);
      if (!existing) return prev;

      if (existing.quantity === 1) {
        toast.error(`${existing.name} removed from cart`);
        return prev.filter(item => item.id !== id);
      } else {
        toast(`Decreased quantity of ${existing.name}`, { icon: '➖' });
        return prev.map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  // ✅ Add this
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
