import React, { useState } from 'react';
import { 
  Calendar,
  Clock,
  Phone,
  Mail,
  MapPin,
  AlertCircle,
  FileText,
  Activity,
  User,
  Plus,
  Edit
} from 'lucide-react';

const PatientProfile = () => {
  const [showEditModal, setShowEditModal] = useState(false);

  const patient = {
    name: "Sarah Johnson",
    age: 32,
    email: "sarah.j@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Medical Drive, Health City, HC 12345",
    dentalInfo: {
      lastCleaning: "Dec 15, 2024",
      nextCleaning: "Jun 15, 2025",
      dentalInsurance: "DentalCare Plus",
      primaryDentist: "Dr. Smith"
    },
    dentalHistory: [
      { date: "Dec 15, 2024", procedure: "Regular Cleaning", notes: "Healthy gums" },
      { date: "Sep 10, 2024", procedure: "Cavity Filling", notes: "Upper right molar" },
      { date: "Jun 15, 2024", procedure: "X-Ray", notes: "No issues found" }
    ],
    treatments: [
      { name: "Cleaning", status: "Completed", date: "Dec 15, 2024" },
      { name: "Whitening", status: "Scheduled", date: "Feb 20, 2025" },
      { name: "Check-up", status: "Pending", date: "Mar 15, 2025" }
    ],
    oralHealth: {
      sensitivity: "Mild",
      brushingFrequency: "Twice daily",
      flossing: "Daily",
      concerns: ["Sensitivity to cold", "Light staining"]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Card with Tooth Design */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-600">
              <path d="M12 2a8 8 0 0 1 8 8c0 3.006-2.4 5.526-4.8 7.333C13.2 18.786 12 20 12 20s-1.2-1.214-3.2-2.667C6.4 15.526 4 13.006 4 10a8 8 0 0 1 8-8z"/>
            </svg>
          </div>
          
          <div className="flex items-start gap-8 relative z-10">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center p-1">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <User size={48} className="text-blue-500" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{patient.name}</h1>
                  <div className="flex items-center gap-4 text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {patient.age} years
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={16} />
                      {patient.dentalInfo.primaryDentist}
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                    <Calendar size={18} />
                    Schedule Appointment
                  </button>
                  <button 
                    onClick={() => setShowEditModal(true)}
                    className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-200 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                  >
                    <Edit size={18} />
                    Edit Profile
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone size={18} />
                  <span>{patient.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail size={18} />
                  <span>{patient.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={18} />
                  <span>{patient.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            {/* Dental Health Overview */}
            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Activity className="text-blue-500" />
                Oral Health Status
              </h2>
              <div className="space-y-4">
                {Object.entries(patient.oralHealth).map(([key, value]) => (
                  <div key={key} className="border-b border-gray-100 pb-3 last:border-0">
                    <div className="text-sm text-gray-600 capitalize">{key}</div>
                    <div className="font-medium">
                      {Array.isArray(value) ? value.join(', ') : value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Insurance & Details */}
            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <FileText className="text-blue-500" />
                Insurance Details
              </h2>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="text-sm text-gray-600">Insurance Provider</div>
                  <div className="font-semibold text-blue-700">
                    {patient.dentalInfo.dentalInsurance}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Last Cleaning</span>
                  <span className="font-medium">{patient.dentalInfo.lastCleaning}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Next Due</span>
                  <span className="font-medium">{patient.dentalInfo.nextCleaning}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            {/* Treatment Timeline */}
            <div className="bg-white rounded-3xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Clock className="text-blue-500" />
                  Treatment Timeline
                </h2>
                <button className="text-blue-500 hover:text-blue-600 flex items-center gap-1">
                  <Plus size={18} />
                  Add Treatment
                </button>
              </div>
              <div className="space-y-6">
                {patient.dentalHistory.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-1 bg-blue-100 rounded relative">
                      <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1 top-0" />
                    </div>
                    <div className="flex-1 pb-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{item.procedure}</h3>
                          <p className="text-gray-600">{item.notes}</p>
                        </div>
                        <span className="text-sm text-gray-500">{item.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Treatments */}
            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <AlertCircle className="text-blue-500" />
                Active Treatment Plan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {patient.treatments.map((treatment, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-xl ${
                      treatment.status === 'Completed' ? 'bg-green-50' :
                      treatment.status === 'Scheduled' ? 'bg-blue-50' :
                      'bg-gray-50'
                    }`}
                  >
                    <div className="font-medium mb-1">{treatment.name}</div>
                    <div className="text-sm text-gray-600">{treatment.date}</div>
                    <div className={`text-sm mt-2 ${
                      treatment.status === 'Completed' ? 'text-green-600' :
                      treatment.status === 'Scheduled' ? 'text-blue-600' :
                      'text-gray-600'
                    }`}>
                      {treatment.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-3xl p-6 w-full max-w-2xl mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Edit Profile</h2>
              <button 
                onClick={() => setShowEditModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded-lg"
                    defaultValue={patient.name}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full p-2 border rounded-lg"
                    defaultValue={patient.email}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input 
                    type="tel" 
                    className="w-full p-2 border rounded-lg"
                    defaultValue={patient.phone}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded-lg"
                    defaultValue={patient.address}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientProfile;