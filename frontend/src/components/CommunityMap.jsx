import React, { useState } from 'react';
import { MapPin, Users, Clock, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { mockCommunities } from '../mock/mockData';

export const CommunityMap = () => {
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [expandedCommunity, setExpandedCommunity] = useState(null);

  const provinces = Object.keys(mockCommunities);

  const handleProvinceClick = (province) => {
    setSelectedProvince(selectedProvince === province ? null : province);
    setExpandedCommunity(null);
  };

  const toggleCommunityDetails = (communityId) => {
    setExpandedCommunity(expandedCommunity === communityId ? null : communityId);
  };

  return (
    <section id="community-map" className="py-20 bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Peta <span className="text-yellow-600">Komunitas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Klik nama provinsi untuk melihat daftar komunitas Bike to Work di dalamnya!
          </p>
        </div>

        {/* Indonesia Map Visualization */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Pilih Provinsi</h3>
            <p className="text-gray-600">Klik pada nama provinsi di bawah untuk melihat komunitas yang tersedia</p>
          </div>

          {/* Province Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {provinces.map((province) => (
              <button
                key={province}
                onClick={() => handleProvinceClick(province)}
                className={`group p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  selectedProvince === province
                    ? 'border-yellow-400 bg-yellow-50 shadow-lg'
                    : 'border-gray-200 hover:border-yellow-300 hover:bg-yellow-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <MapPin className={`h-5 w-5 ${
                      selectedProvince === province ? 'text-yellow-600' : 'text-gray-400 group-hover:text-yellow-500'
                    }`} />
                    <span className={`font-medium ${
                      selectedProvince === province ? 'text-yellow-900' : 'text-gray-700'
                    }`}>
                      {province}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">
                      {mockCommunities[province].length} komunitas
                    </span>
                    {selectedProvince === province ? (
                      <ChevronUp className="h-4 w-4 text-yellow-600" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Province Communities */}
        {selectedProvince && (
          <div className="bg-white rounded-3xl shadow-xl p-8 animate-in slide-in-from-bottom duration-500">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Komunitas di {selectedProvince}
              </h3>
              <p className="text-gray-600">
                {mockCommunities[selectedProvince].length} komunitas tersedia
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mockCommunities[selectedProvince].map((community) => (
                <div
                  key={community.id}
                  className="group bg-gradient-to-br from-yellow-50 to-white border border-yellow-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {community.name}
                      </h4>
                      <p className="text-gray-600 flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-yellow-600" />
                        {community.location}
                      </p>
                    </div>
                    <div className="bg-yellow-100 px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-yellow-800 flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {community.members}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-yellow-600" />
                      <span className="text-sm">Titik Kumpul: {community.meetingPoint}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-yellow-600" />
                      <span className="text-sm">{community.schedule}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleCommunityDetails(community.id)}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-medium py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Hubungi Komunitas</span>
                  </button>

                  {expandedCommunity === community.id && (
                    <div className="mt-4 p-4 bg-yellow-100 rounded-lg animate-in slide-in-from-top duration-300">
                      <p className="text-sm text-yellow-900 font-medium mb-2">Kontak:</p>
                      <p className="text-sm text-yellow-800">{community.contact}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Komunitas Anda Belum Terdaftar?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Daftarkan komunitas Bike to Work di kota Anda dan bergabunglah dengan gerakan Indonesia yang lebih sehat dan hijau.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Daftarkan Komunitas
          </button>
        </div>
      </div>
    </section>
  );
};