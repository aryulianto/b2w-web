import React from 'react';
import { Bike, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_bike2work-id/artifacts/shgkln64_images.png" 
                alt="Bike to Work Indonesia Logo"
                className="h-8 w-8 rounded-lg"
              />
              <span className="text-xl font-bold">BikeToWork Indonesia</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Gerakan nasional untuk gaya hidup sehat, hemat, dan ramah lingkungan melalui bersepeda ke tempat kerja.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Menu Utama</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Manfaat
                </a>
              </li>
              <li>
                <a href="#community-map" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Peta Komunitas
                </a>
              </li>
              <li>
                <a href="#carbon-saved" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Carbon Saved
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Sumber Daya</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Panduan Pemula
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Tips Keselamatan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Rute Terbaik
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Perawatan Sepeda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Hubungi Kami</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-400">info@biketowork.id</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-400">+62 21 1234 5678</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Jl. Sudirman No. 123<br />
                  Jakarta Pusat, 10220<br />
                  Indonesia
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2 text-yellow-400">
              Dapatkan Update Terbaru
            </h3>
            <p className="text-gray-400 mb-4">
              Berlangganan newsletter untuk mendapatkan tips, event, dan berita terbaru seputar bike to work.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-yellow-400 text-white"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold px-6 py-2 rounded-r-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 BikeToWork Indonesia. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};