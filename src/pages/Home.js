import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';

function Home() {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState(200);

  const products = [
    {
      id: 1,
      name: 'Wireless Headphone',
      description: 'Sleek wireless headphones with crystal-clear sound...',
      price: 59.99,
      image: '/images/headphones.jpg',
    },
    {
      id: 2,
      name: 'Sneakers',
      description: 'Iconic Jordan shoes combine premium materials...',
      price: 105.0,
      image: '/images/shoes.webp',
    },
    {
      id: 3,
      name: 'Watch',
      description: 'A high-end watch blends precision craftsmanship...',
      price: 200.0,
      image: '/images/watch.jpg',
    },
    {
      id: 4,
      name: 'Bluetooth Speaker',
      description: 'A Bluetooth speaker delivers powerful, wireless audio...',
      price: 60.0,
      image: '/images/Bluetooth Speaker.jpeg',
    },
     {
      id: 5,
      name: 'Nike Socks',
      description: '"Comfortable and durable Nike socks designed for performance and everyday wear. Cushioned support, breathable fabric, and a snug fit make them ideal for sports, workouts, or casual use.',
      price: 40.0,
      image: '/images/nike socks.jpg',
    },
     {
      id: 6,
      name: 'chaqueta jacket',
      description: '"Comfortable and durable Nike socks designed for performance and everyday wear. Cushioned support, breathable fabric, and a snug fit make them ideal for sports, workouts, or casual use.',
      price: 40.0,
      image: '/images/chaqueta jacket.jpg',
    },
    {
      id: 7,
      name: 'ear buds',
      description: 'The Skullcandy Grey Indy Evo True Wireless Bluetooth Earbud is an on-trend item that is perfect for corporate gifts, giveaways, and so much more. Ideal for contemporary audiences, these earbuds are on the cutting edge of current trends.',
      price: 120.0,
      image: '/images/ear buds.webp',
    },
     {
      id: 8,
      name: 'Men Fitted Hat',
      description: 'Comfortable and durable Nike hat designed for performance and everyday wear. Cushioned support, breathable fabric, and a snug fit make them ideal for sports, workouts, or casual use.',
      price: 120.0,
      image: '/images/Men hat.jpg',
    },
   

  ];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      product.price <= maxPrice
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
          Featured Products
        </h1>

        {/* Filters */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border rounded"
          />
          <div className="flex items-center gap-2">
            <label htmlFor="price" className="text-sm text-gray-700">Max Price:</label>
            <input
              type="range"
              id="price"
              min="0"
              max="200"
              step="10"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-32"
            />
            <span className="text-sm">${maxPrice}</span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h2>
                <p className="text-gray-600 flex-grow text-sm mb-4 line-clamp-3">{product.description}</p>
                <p className="text-lg font-bold text-green-700 mb-4">${product.price.toFixed(2)}</p>
                <div className="flex justify-between items-center mt-auto">
                  <button
                    onClick={() => {
                      addToCart(product);
                      toast.success(`${product.name} added to cart!`);
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition-colors duration-200"
                  >
                    Add to Cart
                  </button>
                  <Link
                    to={`/product/${product.id}`}
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
