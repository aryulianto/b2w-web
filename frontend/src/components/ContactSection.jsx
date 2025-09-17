import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hubungi <span className="text-yellow-600">Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ada pertanyaan tentang gerakan Bike to Work Indonesia? Ingin bergabung dengan komunitas? 
            Jangan ragu untuk menghubungi kami!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Informasi Kontak
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg">
                    <Mail className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">info@biketowork.id</p>
                  <p className="text-gray-600">community@biketowork.id</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg">
                    <Phone className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Telepon</h4>
                  <p className="text-gray-600">+62 21 1234 5678</p>
                  <p className="text-gray-600">+62 812 3456 7890 (WhatsApp)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg">
                    <MapPin className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Alamat</h4>
                  <p className="text-gray-600">
                    Jl. Sudirman No. 123<br />
                    Jakarta Pusat, 10220<br />
                    Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Jam Operasional</h4>
                  <p className="text-gray-600">Senin - Jumat: 08:00 - 17:00 WIB</p>
                  <p className="text-gray-600">Sabtu: 08:00 - 12:00 WIB</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">Akses Cepat</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a 
                  href="#community-map" 
                  className="flex items-center justify-center space-x-3 p-4 bg-yellow-50 rounded-lg text-gray-700 hover:text-yellow-600 hover:bg-yellow-100 transition-all duration-200"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Temukan Komunitas</span>
                </a>
                <a 
                  href="https://carbonsaved.b2w-id.org/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 p-4 bg-yellow-50 rounded-lg text-gray-700 hover:text-yellow-600 hover:bg-yellow-100 transition-all duration-200"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Carbon Saved</span>
                </a>
                <a 
                  href="#benefits" 
                  className="flex items-center justify-center space-x-3 p-4 bg-yellow-50 rounded-lg text-gray-700 hover:text-yellow-600 hover:bg-yellow-100 transition-all duration-200"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Pelajari Manfaat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};