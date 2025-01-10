import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Hero = () => {

  const images = {
    mainImage: "https://images.pexels.com/photos/3779711/pexels-photo-3779711.jpeg", 
    teamImage1: "https://images.unsplash.com/photo-1629909613654-28e377c37b09", 
    teamImage2: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5", 
    teamImage3: "https://images.pexels.com/photos/3845749/pexels-photo-3845749.jpeg" 
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white overflow-hidden">

      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
        
          <div className="space-y-8 relative">
            <div className="mt-12 inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full px-6 py-2 transform hover:scale-105 transition-transform">
              <span className="text-sm font-medium text-white">✨ Hey! We Are Dentic</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="block text-gray-900">Helping You to</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                Bring Back Your
              </span>
              <span className="relative inline-block">
                Happy Smile
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8">
                  <path d="M0 4C20 4 25 4 45 4C65 4 70 4 100 4" stroke="url(#gradient)" strokeWidth="8" fill="none" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="100" y2="0">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#6366F1" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            
            <p className="text-gray-600 text-lg relative p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg">
              Transform your smile with our expert dental care. Using cutting-edge technology 
              and gentle techniques, we're here to give you the confidence you deserve.
            </p>
            
        
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl m-auto pt-3 pb-3 shadow-xl space-y-4 flex justify-center">
             <Link 
              to="/book-appointment"
              className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-md transition-all"
            >
              Book Appointment
            </Link>
            </div>
            
           
            <div className="flex flex-wrap gap-6">
              <div className="bg-white/80 backdrop-blur-lg rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-3">
                    {[images.teamImage1, images.teamImage2, images.teamImage3].map((img, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                      >
                        <img src={img} alt={`Team member ${i + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
                      180+
                    </p>
                    <p className="text-sm text-gray-600">Happy Patients</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-lg rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-lg font-semibold text-gray-700">4.9/5</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Expert Rating</p>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[2.5rem] transform rotate-6 opacity-20" />
            <div className="relative bg-white rounded-[2rem] p-3 shadow-xl transform hover:-rotate-2 transition-transform duration-300">
              <img
                src={images.mainImage}
                alt="Professional dentist with patient"
                className="w-full h-[600px] object-cover rounded-[1.5rem]"
              />
              {/* Trust Badge */}
              <div className="absolute -right-6 top-10 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-gray-700">Trusted by 1000+ Patients</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;