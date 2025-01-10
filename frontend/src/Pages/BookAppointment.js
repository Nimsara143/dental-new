import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const API_BASE_URL = 'http://localhost:5000/api';

const BookAppointment = () => {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceId: '',
    date: '',
    time: '',
    notes: '',
  });
  const navigate = useNavigate(); // Initialize navigate hook

  // Fetch services from the backend
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/services`);
        setServices(response.data);
        console.log("Services loaded:", response.data);
      } catch (err) {
        console.error("Error fetching services:", err.message);
      }
    };

    fetchServices();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.serviceId) {
      alert("Please select a service.");
      return;
    }

    try {
      await axios.post(`${API_BASE_URL}/appointments`, formData);
      alert("Appointment booked successfully");

      // Redirect to the homepage
      navigate('/'); // Replace '/' with the path of your homepage
    } catch (err) {
      console.error("Error booking appointment:", err.message);
      alert("Failed to book the appointment. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Dental Appointment Booking</h1>

        <h2 className="text-xl font-semibold text-gray-700 mb-4">Book an Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring focus:ring-blue-300"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring focus:ring-blue-300"
              required
            />
            <select
              value={formData.serviceId}
              onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring focus:ring-blue-300"
              required
              disabled={services.length === 0}
            >
              <option value="">{services.length === 0 ? "Loading services..." : "Select a Service"}</option>
              {services.map((service) => (
                <option key={service._id} value={service._id}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring focus:ring-blue-300"
              required
            />
            <input
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <textarea
            placeholder="Additional Notes"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring focus:ring-blue-300"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
