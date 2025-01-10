import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import DentalFeatures from './Components/Features';
import AboutUs from './Pages/AboutUs';
import WhyChooseUs from './Components/WhyChooseUs';
import StatsBanner from './Components/StatsBanner';
import ServicesSection from './Components/ServicesSection';
import TestimonialsSection from './Components/TestimonialsSection';
import BlogSection from './Components/BlogSection';
import Footer from './Components/Footer';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import PatientProfile from './Pages/PatientProfile';
import BookAppointment from './Pages/BookAppointment';
import ContactPage from './Pages/ContactPage';
import BlogPage from './Pages/BlogPage';
import AvailableDentists from './Pages/AvailableDentists';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-layout">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/features" element={<DentalFeatures />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/stats" element={<StatsBanner />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/testimonials" element={<TestimonialsSection />} />
            <Route path="/blog" element={<BlogSection />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/patient-profile" element={<PatientProfile />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog-page" element={<BlogPage />} />
            <Route path="/available-dentists" element={<AvailableDentists />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
