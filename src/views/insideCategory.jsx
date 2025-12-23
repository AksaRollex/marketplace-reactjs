import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  Star,
  ShoppingCart,
  Heart,
  Filter,
  ChevronDown,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";

const InsideCategory = () => {
  // Mock products generation
  const products = Array(12)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      name: `Produk Kategori ${i + 1}`,
      price: `Rp ${(Math.floor(Math.random() * 20) + 5) * 100}.000`,
      rating: (Math.random() * 0.5 + 4.5).toFixed(1),
      sold: Math.floor(Math.random() * 500) + 50,
      image: `https://source.unsplash.com/random/400x400?tech,product,${i}`,
      category: "Elektronik",
    }));

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />

      <main className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        {/* Header Category */}
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl p-8 mb-10 text-white relative overflow-hidden shadow-xl shadow-indigo-500/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 flex items-center gap-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">Elektronik & Gadget</h1>
              <p className="text-indigo-100 max-w-2xl">
                Temukan gadget terbaru dan elektronik canggih untuk menunjang
                produktivitas dan gaya hidup Anda.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-1/4">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-28">
              <div className="flex items-center gap-2 font-bold text-gray-900 mb-6">
                <Filter className="w-5 h-5" />
                Filter Produk
              </div>

              <div className="space-y-6">
                {/* Filter Price */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center justify-between cursor-pointer">
                    Harga <ChevronDown className="w-4 h-4 text-gray-400" />
                  </h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-600">
                        Terendah - Tertinggi
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-600">
                        Tertinggi - Terendah
                      </span>
                    </label>
                  </div>
                </div>

                {/* Filter Rating */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center justify-between cursor-pointer">
                    Rating <ChevronDown className="w-4 h-4 text-gray-400" />
                  </h3>
                  <div className="space-y-2">
                    {[5, 4, 3].map((rating) => (
                      <label
                        key={rating}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="rounded text-indigo-600 focus:ring-indigo-500 border-gray-300"
                        />
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <span>{rating} Keatas</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Filter Brand */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center justify-between cursor-pointer">
                    Brand <ChevronDown className="w-4 h-4 text-gray-400" />
                  </h3>
                  <div className="space-y-2">
                    {["Samsung", "Apple", "Xiaomi", "Asus", "Lenovo"].map(
                      (brand) => (
                        <label
                          key={brand}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            className="rounded text-indigo-600 focus:ring-indigo-500 border-gray-300"
                          />
                          <span className="text-sm text-gray-600">{brand}</span>
                        </label>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-500">
                Menampilkan 12 dari 124 produk
              </span>
              <select className="border-gray-200 rounded-lg text-sm text-gray-600 focus:ring-indigo-500 focus:border-indigo-500">
                <option>Urutkan: Popularitas</option>
                <option>Urutkan: Terbaru</option>
                <option>Urutkan: Harga Terendah</option>
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-xl border border-gray-100 hover:border-indigo-100 hover:shadow-lg transition-all"
                >
                  <div className="aspect-[4/3] bg-gray-100 rounded-t-xl overflow-hidden relative">
                    {/* Smart unsplash logic fallback */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                      <span className="text-gray-400 text-xs">
                        Product Image
                      </span>
                    </div>
                    <img
                      src={product.image}
                      alt={product.name}
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 rounded-full bg-white/80 backdrop-blur-sm shadow-sm text-gray-400 hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 truncate text-sm">
                      <Link
                        to="/detailProduct"
                        className="hover:text-indigo-600 transition-colors"
                      >
                        {product.name}
                      </Link>
                    </h3>
                    <div className="flex items-center gap-1 mb-3">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs text-gray-500">
                        {product.rating} | {product.sold} terjual
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-indigo-600 text-sm md:text-base">
                        {product.price}
                      </span>
                      <button className="p-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-indigo-600 hover:text-white transition-colors">
                        <ShoppingCart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-10 flex justify-center gap-2">
              {[1, 2, 3, "...", 8].map((page, i) => (
                <button
                  key={i}
                  className={`w-10 h-10 rounded-lg font-medium flex items-center justify-center transition-colors ${
                    page === 1
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                      : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InsideCategory;
