import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../mock/mockData';

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cerita <span className="text-yellow-600">Inspiratif</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dengarkan pengalaman nyata dari anggota komunitas Bike to Work yang telah merasakan manfaatnya secara langsung.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-yellow-100"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-6 group-hover:bg-yellow-200 transition-colors duration-300">
                <Quote className="h-6 w-6 text-yellow-600" />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-4 w-4 text-yellow-400 fill-current" 
                  />
                ))}
              </div>

              {/* Author Info */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-yellow-900 font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-yellow-600 font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="mt-3 inline-block bg-yellow-100 px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-yellow-800">
                    📍 {testimonial.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Bagikan Cerita Anda!
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Sudah merasakan manfaat bike to work? Ceritakan pengalaman Anda dan inspirasi orang lain untuk bergabung dengan gerakan ini.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Kirim Testimoni
          </button>
        </div>
      </div>
    </section>
  );
};