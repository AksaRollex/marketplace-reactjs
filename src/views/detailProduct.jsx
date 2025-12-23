import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  Star,
  ShoppingCart,
  Heart,
  Minus,
  Plus,
  MessageCircle,
  Share2,
  Check,
} from "lucide-react";
import headphoneImg from "../assets/images/headphone.png";

const DetailProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data
  const product = {
    id: 1,
    name: "Premium Noise Cancelling Headphones Sony XM5 Style",
    price: 2499000,
    rating: 4.8,
    reviews: 128,
    sold: 1200,
    description:
      "Nikmati pengalaman audio terbaik dengan teknologi noise cancelling terkini. Headphone ini dirancang untuk kenyamanan maksimal dengan bantalan telinga yang lembut dan baterai tahan lama hingga 30 jam. Cocok untuk travel, kerja, atau sekadar bersantai menikmati musik favorit Anda.",
    features: [
      "Active Noise Cancellation (ANC) Premium",
      "Baterai tahan hingga 30 jam",
      "Koneksi Bluetooth 5.2 Multi-point",
      "Mikrofon jernih untuk panggilan",
      "Fast charging (3 menit untuk 3 jam playback)",
    ],
    images: [
      headphoneImg,
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop", // generic headphone
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1968&auto=format&fit=crop", // another angle
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=2070&auto=format&fit=crop", // lifestyle
    ],
  };

  const handleAskProduct = () => {
    const message = `Halo, saya ingin bertanya tentang produk ${product.name}`;
    window.open(
      `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />

      <main className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-6 lg:p-10 border border-gray-100 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column: Images */}
            <div className="lg:w-1/2 space-y-4">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative group">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-500 hover:text-red-500 transition-colors shadow-sm">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`aspect-square rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${
                      selectedImage === idx
                        ? "border-indigo-600 ring-2 ring-indigo-600/20"
                        : "border-transparent hover:border-gray-200"
                    }`}
                    onClick={() => setSelectedImage(idx)}
                  >
                    <img
                      src={img}
                      alt={`Preview ${idx}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="lg:w-1/2 flex flex-col">
              <div className="mb-2 flex items-center gap-2">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider rounded-full">
                  Official Store
                </span>
                <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                  <Check className="w-3 h-3" /> Ready Stock
                </span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center text-yellow-400 gap-1">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-bold text-gray-900 text-lg">
                    {product.rating}
                  </span>
                </div>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="text-gray-500 underline decoration-gray-300">
                  {product.reviews} Ulasan
                </span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="text-gray-500">{product.sold} Terjual</span>
              </div>

              <div className="text-4xl font-bold text-indigo-600 mb-8">
                Rp {product.price.toLocaleString("id-ID")}
              </div>

              <div className="prose prose-gray max-w-none text-gray-600 mb-8">
                <p>{product.description}</p>
                <ul className="list-none space-y-2 mt-4 pl-0">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto space-y-6">
                <div className="h-px bg-gray-100"></div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3 bg-gray-50 rounded-full p-1 border border-gray-200">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-full bg-white text-gray-600 hover:text-indigo-600 shadow-sm flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-semibold w-8 text-center text-lg">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-full bg-white text-gray-600 hover:text-indigo-600 shadow-sm flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">
                    Stok Total: 50+ pcs
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 py-4 px-6 bg-white border-2 border-indigo-600 text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Keranjang
                  </button>
                  <button className="flex-[2] py-4 px-6 bg-gray-900 text-white font-bold rounded-xl shadow-lg shadow-gray-900/20 hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
                    Beli Sekarang
                  </button>
                </div>

                <button
                  onClick={handleAskProduct}
                  className="w-full py-3 px-6 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  Tanyakan Produk via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DetailProduct;
