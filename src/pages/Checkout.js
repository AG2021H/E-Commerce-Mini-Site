import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.includes("@")) errs.email = "Valid email required";
    if (!form.address.trim()) errs.address = "Address is required";
    if (!/^\d{16}$/.test(form.cardNumber.replace(/\s/g, ""))) errs.cardNumber = "Enter 16-digit card number";
    if (!/^\d{2}\/\d{2}$/.test(form.expiry)) errs.expiry = "Expiry must be MM/YY";
    if (!/^\d{3}$/.test(form.cvv)) errs.cvv = "CVV must be 3 digits";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    clearCart();
    navigate("/thank-you");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        className={`w-full p-2 border rounded ${errors.name ? "border-red-500" : "border-gray-300"}`}
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className={`w-full p-2 border rounded ${errors.email ? "border-red-500" : "border-gray-300"}`}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <input
        name="address"
        value={form.address}
        onChange={handleChange}
        placeholder="Shipping Address"
        className={`w-full p-2 border rounded ${errors.address ? "border-red-500" : "border-gray-300"}`}
      />
      {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}

      <input
        name="cardNumber"
        value={form.cardNumber}
        onChange={handleChange}
        placeholder="Card Number (16 digits)"
        maxLength={19}
        className={`w-full p-2 border rounded ${errors.cardNumber ? "border-red-500" : "border-gray-300"}`}
      />
      {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}

      <div className="flex space-x-4">
        <input
          name="expiry"
          value={form.expiry}
          onChange={handleChange}
          placeholder="MM/YY"
          maxLength={5}
          className={`w-1/2 p-2 border rounded ${errors.expiry ? "border-red-500" : "border-gray-300"}`}
        />
        <input
          name="cvv"
          value={form.cvv}
          onChange={handleChange}
          placeholder="CVV"
          maxLength={3}
          className={`w-1/2 p-2 border rounded ${errors.cvv ? "border-red-500" : "border-gray-300"}`}
        />
      </div>
      {errors.expiry && <p className="text-red-500 text-sm">{errors.expiry}</p>}
      {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}

      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
        Submit Order
      </button>
    </form>
  );
};

export default Checkout;
