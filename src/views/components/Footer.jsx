import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Globe,
  Mail,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">
                M
              </div>
              <span className="text-2xl font-bold">MarketPlace</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Platform belanja online terpercaya dengan produk berkualitas dan
              layanan terbaik untuk Anda.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Layanan Pelanggan</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pusat Bantuan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cara Pembelian
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pengiriman
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pengembalian Barang
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Tentang Kami</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tentang MarketPlace
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Karir
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Syarat & Ketentuan
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 mt-1 shrink-0" />
                <span>
                  Jl. Teknologi No. 123,
                  <br />
                  Jakarta Selatan, 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0" />
                <span>support@marketplace.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0" />
                <span>+62 21 1234 5678</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} MarketPlace. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
