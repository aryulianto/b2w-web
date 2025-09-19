import React from 'react';
import { Megaphone, BookOpen, Scale, Heart, Users } from 'lucide-react';

export const ProgramSection = () => {
  const programs = [
    {
      id: 'kampanye',
      icon: Megaphone,
      title: 'Kampanye',
      subtitle: 'Sosialisasi & Awareness',
      description: 'Menggalakkan kampanye nasional untuk meningkatkan kesadaran masyarakat tentang manfaat bersepeda ke tempat kerja sebagai gaya hidup sehat dan ramah lingkungan.',
      features: [
        'Kampanye media sosial #BikeToWorkIndonesia',
        'Event Car Free Day di berbagai kota',
        'Kolaborasi dengan influencer dan public figure',
        'Konten edukatif di platform digital'
      ],
      bgGradient: 'from-orange-100 to-yellow-100',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      id: 'edukasi',
      icon: BookOpen,
      title: 'Edukasi',
      subtitle: 'Pembelajaran & Pelatihan',
      description: 'Program edukasi komprehensif tentang keselamatan berkendara, perawatan sepeda, dan manfaat kesehatan dari aktivitas bersepeda secara rutin.',
      features: [
        'Workshop keselamatan berkendara sepeda',
        'Pelatihan perawatan dan service sepeda',
        'Webinar kesehatan dan nutrisi untuk cyclist',
        'Panduan rute aman untuk bike commuter'
      ],
      bgGradient: 'from-blue-100 to-cyan-100',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 'advokasi',
      icon: Scale,
      title: 'Advokasi',
      subtitle: 'Kebijakan & Regulasi',
      description: 'Mengadvokasi pembuatan kebijakan dan infrastruktur yang mendukung keamanan dan kenyamanan para pesepeda di jalan raya dan area perkotaan.',
      features: [
        'Advokasi pembuatan jalur sepeda yang aman',
        'Lobby kebijakan parkir sepeda di gedung-gedung',
        'Kerjasama dengan pemerintah daerah',
        'Sosialisasi traffic rules untuk cyclist'
      ],
      bgGradient: 'from-purple-100 to-pink-100',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      id: 'sosial',
      icon: Heart,
      title: 'Sosial',
      subtitle: 'Kepedulian & Kemanusiaan',
      description: 'Program kepedulian sosial yang melibatkan komunitas pesepeda untuk membantu sesama dan berkontribusi positif bagi masyarakat.',
      features: [
        'Donor darah rutin komunitas cyclist',
        'Bakti sosial ke daerah terpencil',
        'Program sepeda untuk anak sekolah kurang mampu',
        'Gerakan bersih-bersih lingkungan cycling'
      ],
      bgGradient: 'from-green-100 to-emerald-100',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: 'kolaborasi',
      icon: Users,
      title: 'Kolaborasi',
      subtitle: 'Kemitraan & Networking',
      description: 'Membangun kemitraan strategis dengan berbagai pihak untuk memperluas dampak positif gerakan Bike to Work Indonesia.',
      features: [
        'Partnership dengan perusahaan-perusahaan besar',
        'Kolaborasi dengan komunitas olahraga lain',
        'Kerjasama dengan startup transportasi',
        'Networking dengan NGO lingkungan hidup'
      ],
      bgGradient: 'from-yellow-100 to-amber-100',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Program <span className="text-yellow-600">Bike to Work Indonesia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lima pilar program utama yang menjalankan misi kami untuk menciptakan budaya bersepeda yang berkelanjutan di Indonesia.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="space-y-16">
          {programs.map((program, index) => (
            <div 
              key={program.id}
              id={program.id}
              className={`relative ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex items-center gap-12`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`flex items-center justify-center w-16 h-16 ${program.iconBg} rounded-2xl`}>
                    <program.icon className={`h-8 w-8 ${program.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {program.title}
                    </h3>
                    <p className="text-lg text-gray-600 font-medium">
                      {program.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  {program.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Program Unggulan:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className={`flex-shrink-0 w-6 h-6 ${program.iconBg} rounded-full flex items-center justify-center mt-1`}>
                          <div className={`w-2 h-2 ${program.iconColor.replace('text-', 'bg-')} rounded-full`}></div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual Element */}
              <div className="flex-1 flex justify-center">
                <div className={`relative w-full max-w-md h-80 bg-gradient-to-br ${program.bgGradient} rounded-3xl flex items-center justify-center overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500`}>
                  <div className="text-center space-y-4">
                    <div className={`w-24 h-24 ${program.iconBg} rounded-full flex items-center justify-center mx-auto`}>
                      <program.icon className={`h-12 w-12 ${program.iconColor}`} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold text-gray-800">
                        {program.title}
                      </h4>
                      <p className="text-gray-600 font-medium">
                        {program.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/10 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Bergabunglah dalam Program Kami! 🚴‍♂️
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Jadilah bagian dari perubahan positif untuk Indonesia yang lebih sehat dan berkelanjutan. 
            Setiap kontribusi Anda akan memberikan dampak yang berarti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Daftar Volunteer
            </button>
            <button className="border-2 border-yellow-400 text-yellow-700 hover:bg-yellow-50 font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
              Donasi Program
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};