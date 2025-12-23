import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Smartphone,
  Shirt,
  Laptop,
  CreditCard,
  Home,
  Watch,
  Gamepad,
  Camera,
  Utensils,
  Car,
  Heart,
  ShoppingCart,
  Star,
  Search,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Globe,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Product images generated
import headphoneImg from "../../src/assets/images/headphone.png";
import smartwatchImg from "../../src/assets/images/smartwatch.png";
import shoesImg from "../../src/assets/images/shoes.png";
import backpackImg from "../../src/assets/images/backpack.png";

const LandingPage = () => {
  const categories = [
    { name: "Pulsa & Tagihan", icon: CreditCard },
    { name: "Pakaian", icon: Shirt },
    { name: "Elektronik", icon: Smartphone },
    { name: "Komputer", icon: Laptop },
    { name: "Rumah Tangga", icon: Home },
    { name: "Jam Tangan", icon: Watch },
    { name: "Gaming", icon: Gamepad },
    { name: "Kamera", icon: Camera },
    { name: "Makanan", icon: Utensils },
    { name: "Otomotif", icon: Car },
  ];

  const favoriteProducts = [
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
  ];

  const allProducts = Array(8)
    .fill(null)
    .map((_, i) => ({
      id: i + 5,
      name: `Produk Pilihan ${i + 1}`,
      price: `Rp ${(Math.floor(Math.random() * 10) + 1) * 100}.000`,
      rating: (Math.random() * 0.5 + 4.5).toFixed(1),
      sold: Math.floor(Math.random() * 500) + 50,
      image: `https://source.unsplash.com/random/400x400?product,${i}`,
    }));

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <header
        id="home"
        className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-50 rounded-full blur-[80px] opacity-60 translate-y-1/3 -translate-x-1/4"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold mb-6 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Promo Spesial Hari Ini
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
            Temukan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Produk Impianmu
            </span>
            <br /> dengan Mudah.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            MarketPlace menyediakan ribuan produk berkualitas dari berbagai
            kategori. Belanja aman, nyaman, dan cepat langsung dari rumah Anda.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 shadow-xl shadow-gray-900/20">
              Mulai Belanja
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 border border-gray-200 font-semibold rounded-full hover:bg-gray-50 transition-colors w-full sm:w-auto hover:border-gray-300">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </header>

      {/* Categories Section */}
      <section id="kategori" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kategori Pilihan
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Cari apa yang Anda butuhkan dengan cepat melalui kategori populer
              kami.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all cursor-pointer bg-white"
              >
                <div className="w-14 h-14 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <cat.icon className="w-6 h-6" />
                </div>
                <span className="font-medium text-gray-700 group-hover:text-indigo-600 transition-colors">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Favorite Products Section */}
      <section id="produk-favorit" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Produk Favorit
              </h2>
              <p className="text-gray-500">
                Pilihan terbaik yang paling banyak dicari minggu ini.
              </p>
            </div>
            <a
              href="#"
              className="hidden md:flex items-center text-indigo-600 font-semibold hover:text-indigo-700"
            >
              Lihat Semua <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {favoriteProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm text-gray-400 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
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
                    {product.name}
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
        </div>
      </section>

      {/* All Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Jelajahi Semua Produk
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Temukan ribuan produk menarik lainnya dengan harga terbaik.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl border border-gray-100 hover:border-indigo-100 hover:shadow-lg transition-all"
              >
                <div className="aspect-[4/3] bg-gray-100 rounded-t-xl overflow-hidden relative">
                  {/* Fallback image for All Products since we didn't generate these */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                    <Smartphone className="w-12 h-12 text-gray-300" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1 truncate">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs text-gray-500">
                      {product.rating} | {product.sold} terjual
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-indigo-600">
                      {product.price}
                    </span>
                    <button className="text-sm font-medium text-gray-500 hover:text-indigo-600">
                      Lihat
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-gray-100 text-gray-900 font-semibold rounded-full hover:bg-gray-200 transition-colors">
              Muat Lebih Banyak
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
