import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  CreditCard,
  Shirt,
  Smartphone,
  Laptop,
  Home,
  Watch,
  Gamepad,
  Camera,
  Utensils,
  Car,
} from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Always show background if not on home page
  const navbarClasses =
    isHome && !scrolled
      ? "bg-transparent py-5"
      : "bg-white/90 backdrop-blur-md shadow-md py-3";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarClasses}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            M
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            MarketPlace
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-600 hover:text-indigo-600 font-medium transition-colors relative group"
          >
            Home
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link
            to="/insideCategory"
            className="text-gray-600 hover:text-indigo-600 font-medium transition-colors relative group"
          >
            Kategori
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link
            to="/favorite"
            className="text-gray-600 hover:text-indigo-600 font-medium transition-colors relative group"
          >
            Produk Favorit
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
        </div>

        {/* Search Bar - Hidden on Mobile */}
        <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Cari produk..."
            className="bg-transparent border-none outline-none text-sm ml-2 w-full text-gray-600 placeholder-gray-400"
          />
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/cart"
            className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors relative"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </Link>
          <div className="h-6 w-px bg-gray-200"></div>
          <Link
            to="/login"
            className="px-5 py-2 text-gray-600 font-medium hover:text-indigo-600 transition-colors"
          >
            Masuk
          </Link>
          <Link
            to="/register"
            className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium rounded-full shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 active:scale-95 transition-all"
          >
            Daftar
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg py-4 px-6 flex flex-col gap-4 animate-fade-in-down">
          <Link
            to="/"
            className="text-gray-600 font-medium py-2 hover:text-indigo-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/insideCategory"
            className="text-gray-600 font-medium py-2 hover:text-indigo-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Kategori
          </Link>
          <Link
            to="/favorite"
            className="text-gray-600 font-medium py-2 hover:text-indigo-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Produk Favorit
          </Link>
          <Link
            to="/cart"
            className="text-gray-600 font-medium py-2 hover:text-indigo-600 flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Keranjang{" "}
            <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full">
              2
            </span>
          </Link>

          <div className="h-px bg-gray-100 my-2"></div>

          <Link
            to="/login"
            className="w-full text-left py-2 text-gray-600 font-medium inline-block"
            onClick={() => setMobileMenuOpen(false)}
          >
            Masuk
          </Link>
          <Link
            to="/register"
            className="w-full py-2 bg-indigo-600 text-white font-medium rounded-lg text-center inline-block"
            onClick={() => setMobileMenuOpen(false)}
          >
            Daftar
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
