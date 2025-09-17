import React from 'react';
import { Heart, Leaf, Wallet, Clock } from 'lucide-react';
import { bikeToWorkBenefits } from '../mock/mockData';

const iconComponents = {
  Heart,
  Leaf,
  Wallet,
  Clock
};

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Manfaat <span className="text-yellow-600">Bike to Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan berbagai keuntungan luar biasa yang akan Anda rasakan ketika memilih sepeda sebagai transportasi harian ke kantor.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {bikeToWorkBenefits.map((benefit, index) => {
            const IconComponent = iconComponents[benefit.icon];
            return (
              <div 
                key={index}
                className="group text-center p-8 bg-gradient-to-br from-yellow-50 to-white rounded-2xl border border-yellow-100 hover:border-yellow-200 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-2xl mx-auto mb-6 group-hover:bg-yellow-500 transition-colors duration-300 group-hover:scale-110 transform">
                  <IconComponent className="h-8 w-8 text-yellow-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Extended Benefits */}
        <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Lebih dari Sekedar Transportasi
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-yellow-900 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    <strong>Networking Alami:</strong> Bertemu dengan rekan kerja dan teman baru dalam perjalanan yang sama
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-yellow-900 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    <strong>Mental Health:</strong> Mengurangi stress dan meningkatkan mood dengan aktivitas fisik di pagi hari
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-yellow-900 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    <strong>Produktivitas:</strong> Tubuh yang sehat dan pikiran yang fresh meningkatkan performa kerja
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-yellow-900 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    <strong>Kontribusi Sosial:</strong> Menjadi bagian dari solusi masalah lingkungan dan kemacetan
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-3xl p-8 shadow-lg transform rotate-3 hover:rotate-1 transition-transform duration-500">
                <div className="text-6xl mb-4">🚴‍♀️</div>
                <div className="text-2xl font-bold text-gray-900 mb-2">Join the Movement</div>
                <div className="text-gray-600">Mulai hari ini juga!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};