import React, { useState } from 'react';
import { Menu, X, Bike } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="https://customer-assets.emergentagent.com/job_bike2work-id/artifacts/shgkln64_images.png" 
              alt="Bike to Work Indonesia Logo"
              className="h-10 w-10 rounded-lg"
            />
            <span className="text-xl font-bold text-yellow-900">BikeToWork Indonesia</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-200"
            >
              Beranda
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-200"
            >
              Tentang
            </a>
            <a 
              href="#benefits" 
              className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-200"
            >
              Manfaat
            </a>
            <a 
              href="#community-map" 
              className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-200"
            >
              Peta Komunitas
            </a>
            <a 
              href="#carbon-saved" 
              className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-200"
            >
              Carbon Saved
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-200"
            >
              Kontak
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
              Gabung Komunitas
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-yellow-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-yellow-100 py-4 space-y-4">
            <a 
              href="#home" 
              className="block text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-200 px-4"
              onClick={toggleMenu}
            >
              Beranda
            </a>
            <a 
              href="#about" 
              className="block text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-200 px-4"
              onClick={toggleMenu}
            >
              Tentang
            </a>
            <a 
              href="#benefits" 
              className="block text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-200 px-4"
              onClick={toggleMenu}
            >
              Manfaat
            </a>
            <a 
              href="#community-map" 
              className="block text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-200 px-4"
              onClick={toggleMenu}
            >
              Peta Komunitas
            </a>
            <a 
              href="#carbon-saved" 
              className="block text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-200 px-4"
              onClick={toggleMenu}
            >
              Carbon Saved
            </a>
            <a 
              href="#contact" 
              className="block text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-200 px-4"
              onClick={toggleMenu}
            >
              Kontak
            </a>
            <div className="px-4">
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
                Gabung Komunitas
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};