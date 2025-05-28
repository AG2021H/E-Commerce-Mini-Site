import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-center text-lg">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-6">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="bg-white rounded-lg shadow-md p-6 flex justify-between items-center"
              >
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{item.name}</h2>
                  <p className="text-gray-500 text-sm">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-3 space-x-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                      −
                    </button>
                    <span className="font-medium text-lg">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="text-xl font-bold text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-right">
            <p className="text-2xl font-bold text-gray-900 mb-4">
              Total: ${total.toFixed(2)}
            </p>
            <Link
              to="/checkout"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
