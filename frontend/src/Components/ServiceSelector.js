import React from 'react';

const ServiceSelector = ({ services, selectedService, onSelect }) => {
  if (!services || services.length === 0) {
    return <p className="text-center text-gray-500">Loading services...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {services.map((service) => (
        <div
          key={service._id}
          onClick={() => onSelect(service.name)}
          className={`relative p-6 rounded-2xl cursor-pointer transition-all ${
            selectedService === service.name
              ? `border-2 bg-blue-50 transform scale-[1.02]`
              : 'border border-gray-100 hover:border-gray-200 bg-white'
          }`}
        >
          <div className="inline-flex p-3 rounded-xl bg-blue-50">
            {/* Replace with an icon if needed */}
            <span className="text-blue-600 font-bold text-lg">{service.name[0]}</span>
          </div>
          <h3 className="text-lg font-semibold mt-4 text-gray-900">{service.name}</h3>
          <div className="flex items-center justify-between mt-4">
            <span className="text-gray-500 text-sm">{service.duration}</span>
            <span className="font-semibold text-gray-900">{service.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSelector;
