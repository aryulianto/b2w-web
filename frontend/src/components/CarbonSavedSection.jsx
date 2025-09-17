import React, { useState, useEffect } from 'react';
import { Leaf, TreePine, Car, Factory, TrendingUp } from 'lucide-react';

export const CarbonSavedSection = () => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const totalCarbonSaved = 15420; // kg CO2 saved

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimatedValue(prev => {
          if (prev < totalCarbonSaved) {
            return prev + Math.ceil(totalCarbonSaved / 100);
          }
          clearInterval(interval);
          return totalCarbonSaved;
        });
      }, 50);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const impactStats = [
    {
      icon: TreePine,
      value: "387",
      label: "Pohon Diselamatkan",
      description: "Setara dengan jumlah pohon yang diperlukan untuk menyerap CO2 yang telah kita hemat"
    },
    {
      icon: Car,
      value: "68,200",
      label: "Km Mobil Dihindari", 
      description: "Jarak yang setara dengan mengemudi mobil dari Jakarta ke Bali sebanyak 15 kali"
    },
    {
      icon: Factory,
      value: "3,850",
      label: "Liter BBM Dihemat",
      description: "Penghematan bahan bakar fosil yang berkontribusi pada pengurangan polusi udara"
    }
  ];

  const monthlyData = [
    { month: "Jan", carbon: 1200, distance: 5800 },
    { month: "Feb", carbon: 1350, distance: 6200 },
    { month: "Mar", carbon: 1800, distance: 7500 },
    { month: "Apr", carbon: 2100, distance: 8900 },
    { month: "Mei", carbon: 2450, distance: 9800 },
    { month: "Jun", carbon: 2800, distance: 11200 },
    { month: "Jul", carbon: 3200, distance: 12500 },
    { month: "Agu", carbon: 3650, distance: 13800 }
  ];

  return (
    <section id="carbon-saved" className="py-20 bg-gradient-to-br from-green-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-green-600">Carbon Saved</span> Indonesia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lihat dampak nyata yang telah kita ciptakan bersama dalam mengurangi jejak karbon melalui gerakan Bike to Work.
          </p>
        </div>

        {/* Main Carbon Counter */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 text-center">
          <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mx-auto mb-6">
            <Leaf className="h-10 w-10 text-green-600" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Total CO₂ yang Berhasil Dikurangi
          </h3>
          <div className="text-5xl md:text-7xl font-bold text-green-600 mb-2">
            {animatedValue.toLocaleString('id-ID')}
          </div>
          <div className="text-xl text-gray-600 mb-8">Kilogram CO₂</div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-green-50 rounded-2xl p-6">
              <div className="text-2xl font-bold text-green-600 mb-1">2024</div>
              <div className="text-gray-600">Target Tahun Ini</div>
              <div className="text-3xl font-bold text-gray-900 mt-2">25,000 kg</div>
            </div>
            <div className="bg-yellow-50 rounded-2xl p-6">
              <div className="text-2xl font-bold text-yellow-600 mb-1">Bulanan</div>
              <div className="text-gray-600">Rata-rata per Bulan</div>
              <div className="text-3xl font-bold text-gray-900 mt-2">1,925 kg</div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6">
              <div className="text-2xl font-bold text-blue-600 mb-1">Harian</div>
              <div className="text-gray-600">Rata-rata per Hari</div>
              <div className="text-3xl font-bold text-gray-900 mt-2">64 kg</div>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-green-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <stat.icon className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-green-600 mb-3">{stat.label}</div>
              <p className="text-gray-600 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Monthly Progress Chart */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Progress 2024</h3>
              <p className="text-gray-600">Perkembangan penghematan CO₂ sepanjang tahun</p>
            </div>
            <div className="flex items-center space-x-2 text-green-600">
              <TrendingUp className="h-5 w-5" />
              <span className="font-semibold">+18% dari target</span>
            </div>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {monthlyData.map((data, index) => (
              <div key={index} className="text-center">
                <div className="mb-2">
                  <div 
                    className="bg-gradient-to-t from-green-400 to-green-300 rounded-lg mx-auto transition-all duration-500 hover:scale-105"
                    style={{ 
                      height: `${(data.carbon / 4000) * 120 + 20}px`, 
                      width: '40px'
                    }}
                  ></div>
                </div>
                <div className="text-sm font-medium text-gray-900">{data.month}</div>
                <div className="text-xs text-gray-600">{data.carbon}kg</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-green-100 to-yellow-100 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Mari Bersama Selamatkan Bumi! 🌍
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Setiap kilometer yang Anda tempuh dengan sepeda adalah kontribusi nyata untuk planet yang lebih hijau. 
            Bergabunglah dengan kami dan jadilah bagian dari solusi perubahan iklim.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Mulai Kontribusi Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};