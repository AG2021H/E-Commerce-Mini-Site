import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartContext'; // updated import

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';
import NotFound from './pages/NotFound';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Toaster position="top-right" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
