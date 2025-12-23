import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Trash2, Plus, Minus, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Dummy data for cart
import headphoneImg from "../assets/images/headphone.png";
import smartwatchImg from "../assets/images/smartwatch.png";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Noise Cancelling Headphones",
      price: 2499000,
      image: headphoneImg,
      quantity: 1,
      category: "Audio",
    },
    {
      id: 2,
      name: "Fitness Smartwatch Pro",
      price: 1899000,
      image: smartwatchImg,
      quantity: 2,
      category: "Wearable",
    },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.11; // 11% tax
  const total = subtotal + tax;

  const formatPrice = (price) => {
    return "Rp " + price.toLocaleString("id-ID");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />

      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Keranjang Belanja
        </h1>

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items List */}
            <div className="lg:w-2/3 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-6 items-center"
                >
                  <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 w-full text-center sm:text-left">
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      {item.category}
                    </p>
                    <div className="text-xl font-bold text-indigo-600">
                      {formatPrice(item.price)}
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3 bg-gray-50 rounded-full p-1 border border-gray-200">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 rounded-full bg-white text-gray-600 hover:text-indigo-600 shadow-sm flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-semibold w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 rounded-full bg-white text-gray-600 hover:text-indigo-600 shadow-sm flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg shadow-indigo-500/5 sticky top-28">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Ringkasan Pesanan
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Pajak (11%)</span>
                    <span className="font-medium">{formatPrice(tax)}</span>
                  </div>
                  <div className="h-px bg-gray-100 my-2"></div>
                  <div className="flex justify-between text-gray-900 text-lg font-bold">
                    <span>Total</span>
                    <span className="text-indigo-600">
                      {formatPrice(total)}
                    </span>
                  </div>
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                  Checkout
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-xs text-center text-gray-400 mt-4">
                  Pembayaran aman dan terenkripsi
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
            <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-10 h-10 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Keranjang Anda Kosong
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Sepertinya Anda belum menambahkan produk apapun ke keranjang.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Mulai Belanja
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
