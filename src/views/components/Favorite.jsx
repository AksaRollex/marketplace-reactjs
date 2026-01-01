import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Star, ShoppingCart, Heart, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Mock Data
import headphoneImg from "../../assets/images/headphone.png";
import smartwatchImg from "../../assets/images/smartwatch.png";
import shoesImg from "../../assets/images/shoes.png";
import backpackImg from "../../assets/images/backpack.png";

const Favorite = () => {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: "Premium Noise Cancelling Headphones",
      price: "Rp 2.499.000",
      rating: 4.8,
      sold: 1200,
      image: headphoneImg,
      category: "Audio",
    },
    {
      id: 2,
      name: "Fitness Smartwatch Pro",
      price: "Rp 1.899.000",
      rating: 4.9,
      sold: 850,
      image: smartwatchImg,
      category: "Wearable",
    },
    {
      id: 3,
      name: "Neon Speed Runners",
      price: "Rp 1.250.000",
      rating: 4.7,
      sold: 2100,
      image: shoesImg,
      category: "Sport",
    },
    {
      id: 4,
      name: "Waterproof Urban Backpack",
      price: "Rp 799.000",
      rating: 4.6,
      sold: 540,
      image: backpackImg,
      category: "Travel",
    },
  ]);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />

      <main className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Produk Favorit</h1>
          <span className="text-gray-500">
            {favorites.length} Item Tersimpan
          </span>
        </div>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {favorites.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
              >
                <div className="relative aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() => removeFavorite(product.id)}
                      className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm text-red-500 hover:bg-red-50 transition-colors"
                      title="Hapus dari favorit"
                    >
                      <Heart className="w-5 h-5 fill-red-500" />
                    </button>
                  </div>
                  <div className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-md">
                    {product.category}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium text-gray-900">
                      {product.rating}
                    </span>
                    <span className="text-sm text-gray-400">
                      ({product.sold} terjual)
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 line-clamp-2 min-h-[3rem]">
                    <Link
                      to="/detailProduct"
                      className="hover:text-indigo-600 transition-colors"
                    >
                      {product.name}
                    </Link>
                  </h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold text-indigo-600">
                      {product.price}
                    </span>
                    <button className="p-2 rounded-lg bg-gray-900 text-white hover:bg-indigo-600 transition-colors shadow-lg shadow-gray-900/20 group-hover:shadow-indigo-500/30">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
            <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Belum ada produk favorit
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Simpan produk yang Anda suka disini agar mudah ditemukan kembali
              nanti.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Jelajahi Produk
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Favorite;
