import React from 'react';
import { Target, Users, Globe, Award } from 'lucide-react';

export const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Misi Kami",
      description: "Mengajak masyarakat Indonesia untuk beralih ke transportasi yang lebih sehat dan berkelanjutan melalui bersepeda ke tempat kerja."
    },
    {
      icon: Users,
      title: "Komunitas Solid",
      description: "Membangun jaringan komunitas pesepeda yang saling mendukung dan berbagi pengalaman dalam perjalanan bike to work."
    },
    {
      icon: Globe,
      title: "Dampak Lingkungan",
      description: "Berkontribusi mengurangi polusi udara dan kemacetan di kota-kota besar Indonesia melalui gerakan ramah lingkungan."
    },
    {
      icon: Award,
      title: "Prestasi Bersama",
      description: "Merayakan pencapaian setiap anggota komunitas dalam menciptakan perubahan positif untuk diri sendiri dan lingkungan."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tentang <span className="text-yellow-600">Bike to Work Indonesia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Gerakan nasional yang mengajak masyarakat Indonesia untuk menggunakan sepeda sebagai alat transportasi utama menuju tempat kerja. Kami percaya bahwa perubahan kecil dalam kebiasaan sehari-hari dapat memberikan dampak besar bagi kesehatan pribadi dan lingkungan.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">2005</div>
            <div className="text-gray-600">Tahun Didirikan</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">25+</div>
            <div className="text-gray-600">Kota di Indonesia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">1500+</div>
            <div className="text-gray-600">Anggota Aktif</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">100K+</div>
            <div className="text-gray-600">Kilometer Ditempuh</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-yellow-50 to-white p-6 rounded-2xl border border-yellow-100 hover:border-yellow-200 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-xl mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-yellow-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="mt-16 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Visi Kami untuk Indonesia
          </h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Menjadikan Indonesia sebagai negara dengan budaya bersepeda yang kuat, di mana setiap warga memiliki kesadaran tinggi untuk memilih transportasi yang sehat, ekonomis, dan ramah lingkungan. Bersama-sama, kita ciptakan Indonesia yang lebih hijau dan sehat.
          </p>
        </div>
      </div>
    </section>
  );
};