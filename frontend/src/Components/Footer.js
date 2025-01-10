import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#020B2D] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-blue-500">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Dentic</h2>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Helpful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Helpfull Link</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email Address..."
                  className="flex-1 px-4 py-2 rounded-l-lg bg-white text-gray-900"
                />
                <button className="bg-blue-500 text-white px-6 py-2 rounded-r-lg hover:bg-blue-600 transition-colors">
                  Sign Up
                </button>
              </div>
              <p className="text-gray-400">Jl. Patimura II No. 18, Denpasar</p>
              <p className="text-gray-400">+01234 567 890</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            Dental Clinic Template Kit by Jegtheme
          </p>
          <p className="text-gray-400 text-sm">
            Copyright © 2023. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;