import React from 'react';
import { ArrowRight, Users, MapPin, Heart } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-yellow-50 via-white to-yellow-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Gowes ke Kantor,
                <span className="text-yellow-600 block">Hidup Lebih Sehat!</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Bergabunglah dengan gerakan Bike to Work Indonesia. Temukan komunitas pesepeda di kota Anda dan mulai perjalanan menuju gaya hidup yang lebih sehat, hemat, dan ramah lingkungan.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mx-auto mb-2">
                  <Users className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Anggota Aktif</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mx-auto mb-2">
                  <MapPin className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Kota</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mx-auto mb-2">
                  <Heart className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">KM Ditempuh</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span>Temukan Komunitas</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-yellow-400 text-yellow-700 hover:bg-yellow-50 font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative lg:pl-8">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-500">
                <div className="text-center text-yellow-800 space-y-4">
                  <div className="text-6xl font-bold">🚴‍♂️</div>
                  <div className="text-2xl font-semibold">Bike to Work</div>
                  <div className="text-lg">Indonesia</div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
                <span className="text-2xl">🌱</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse">
                <span className="text-2xl">💪</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};