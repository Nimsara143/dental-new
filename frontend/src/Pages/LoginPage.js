import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Stethoscope, Mail, Lock, ArrowRight, CheckCircle } from 'lucide-react';
import axios from 'axios';

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null); // For success/error messages

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      // API call to login endpoint
      const response = await axios.post('http://localhost:5000/api/login', { email, password });

      // Handle success
      setIsLoading(false);
      setMessage({ type: 'success', text: response.data.message });

      // Redirect to homepage
      navigate('/'); // Replace '/' with the actual route to your homepage
    } catch (error) {
      // Handle error
      setIsLoading(false);
      setMessage({ type: 'error', text: error.response?.data?.message || 'Something went wrong' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl opacity-60" />
      </div>

      <div className="relative container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3 mb-12 animate-fade-in-up">
          <div className="bg-blue-500 text-white p-3 rounded-2xl shadow-lg">
            <Stethoscope size={32} />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Dentic
          </h1>
        </div>

        {/* Main Card */}
        <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-gray-800">Welcome Back!</h2>
            <p className="text-gray-500">Sign in to access your patient portal</p>
          </div>

          {message && (
            <div
              className={`p-3 rounded text-center ${
                message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500">
                <Mail size={20} />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm"
                placeholder="Enter your email"
                required
              />
              {email && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-green-500">
                  <CheckCircle size={20} />
                </div>
              )}
            </div>

            {/* Password Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500">
                <Lock size={20} />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="relative w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-4 px-6 rounded-xl font-medium 
                hover:shadow-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-300 disabled:opacity-70"
            >
              <span className={`flex items-center justify-center gap-2 ${isLoading ? 'invisible' : ''}`}>
                Sign In
                <ArrowRight size={20} />
              </span>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <a
                href="/register"
                className="font-medium text-blue-500 hover:text-blue-600 transition-colors"
              >
                Create one now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
