import React from 'react';

const ConfirmBooking = ({ selectedService, selectedDate, selectedTime, formData }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100">
    <h3 className="text-lg font-semibold text-gray-900">Booking Summary</h3>
    <div className="mt-4 space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Service:</span>
        <span className="font-medium">{selectedService}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Date:</span>
        <span className="font-medium">
          {selectedDate && new Date(selectedDate).toLocaleDateString()}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Time:</span>
        <span className="font-medium">{selectedTime}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Name:</span>
        <span className="font-medium">{formData.name}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Email:</span>
        <span className="font-medium">{formData.email}</span>
      </div>
    </div>
  </div>
);

export default ConfirmBooking;
