import React, { useState } from 'react';
import { 
  User,
  Star,
  Calendar,
  Clock,
  Search,
  Filter
} from 'lucide-react';

const AvailableDentists = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const dentists = [
    {
      id: 1,
      name: "Dr. Sarah Smith",
      specialty: "General Dentistry",
      experience: "15 years",
      rating: 4.9,
      reviews: 127,
      availableSlots: ["9:00 AM", "2:30 PM", "4:00 PM"],
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      nextAvailable: "Today"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Orthodontist",
      experience: "12 years",
      rating: 4.8,
      reviews: 98,
      availableSlots: ["10:30 AM", "3:00 PM"],
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      nextAvailable: "Tomorrow"
    },
    {
      id: 3,
      name: "Dr. Emily Johnson",
      specialty: "Pediatric Dentist",
      experience: "8 years",
      rating: 4.9,
      reviews: 156,
      availableSlots: ["11:00 AM", "2:00 PM", "4:30 PM"],
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      nextAvailable: "Today"
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Periodontist",
      experience: "20 years",
      rating: 4.7,
      reviews: 203,
      availableSlots: ["9:30 AM", "1:30 PM"],
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      nextAvailable: "Tomorrow"
    }
  ];

  const specialties = ["All", "General Dentistry", "Orthodontist", "Pediatric Dentist", "Periodontist"];

  const filteredDentists = dentists.filter(dentist => {
    const matchesSearch = dentist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        dentist.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || dentist.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Available Dentists</h1>
          <p className="text-gray-600">Find and schedule an appointment with our experienced dentists</p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by name or specialty..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Specialty Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
              >
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty}>{specialty}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Dentists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDentists.map((dentist) => (
            <div key={dentist.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={dentist.image}
                    alt={dentist.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{dentist.name}</h3>
                    <p className="text-blue-600">{dentist.specialty}</p>
                    <div className="flex items-center mt-1">
                      <Star className="text-yellow-400" size={16} fill="currentColor" />
                      <span className="ml-1 text-gray-600">{dentist.rating}</span>
                      <span className="ml-1 text-gray-400">({dentist.reviews} reviews)</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">{dentist.experience} experience</p>
                  </div>
                </div>

                {/* Available Slots */}
                <div className="mt-4">
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span>Next Available: {dentist.nextAvailable}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {dentist.availableSlots.map((slot, index) => (
                      <button
                        key={index}
                        className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors flex items-center"
                      >
                        <Clock size={14} className="mr-1" />
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Book Appointment Button */}
                <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableDentists;