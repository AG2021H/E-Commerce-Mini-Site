import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";

function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p className="p-6 text-center text-gray-500">Product not found.</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-md rounded-lg shadow-lg object-cover"
        />
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h2>
          <p className="text-gray-700 mb-6 text-lg">{product.description}</p>
          <p className="text-2xl font-semibold text-green-700 mb-6">
            ${product.price.toFixed(2)}
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => addToCart(product)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow transition"
          >
            Add to Cart
          </button>
          <button
            onClick={() => {
              addToCart(product);
              navigate("/checkout");
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
