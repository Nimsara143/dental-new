import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import FAQSection from '../Components/FAQSection';

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-[#F8FAFF]">
      {/* Header Section */}
      <div className="text-center mb-16">
        <p className="text-blue-600 text-sm mb-2">Contact Us</p>
        <h1 className="text-4xl font-bold mb-4">
          Get More <span className="text-blue-500">Information</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Nullam quis ante. Etiam sit amet orci eget eros faucibus
          tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
        </p>
      </div>

      {/* Contact Form and Info Section */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 text-sm mb-2">Your Name *</label>
                <input
                  type="text"
                  placeholder="First name here"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2">Telephone *</label>
                <input
                  type="tel"
                  placeholder="Telephone"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm mb-2">Email Address *</label>
              <input
                type="email"
                placeholder="Add email"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm mb-2">Subject *</label>
              <input
                type="text"
                placeholder="How can we help you?"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm mb-2">Comments / Questions *</label>
              <textarea
                placeholder="Comments"
                rows={4}
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-[#0A1B3D] text-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-8">Contact Us</h2>
          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-gray-400" />
              <p>Jl. Patimura II No. 18, Denpasar</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-gray-400" />
              <p>dentic@mail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-gray-400" />
              <p>+01234 567 890</p>
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          </div>

          {/* Google Maps Integration */}
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2!2d115.2!3d-8.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzYnMDAuMCJTIDExNcKwMTInMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
   
      </div>
      <FAQSection />
    </div>
  );
};

export default ContactPage;