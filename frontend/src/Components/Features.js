import React from 'react';
import { DollarSign, Stethoscope, Award } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 space-y-4">
    <div className="bg-blue-50 p-4 rounded-lg">
      <Icon className="w-8 h-8 text-blue-500" strokeWidth={1.5} />
    </div>
    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    <p className="text-gray-600 max-w-sm">
      {description}
    </p>
  </div>
);

const DentalFeatures = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Affordable Price",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus nec."
    },
    {
      icon: Stethoscope,
      title: "Professional Dentist",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus nec."
    },
    {
      icon: Award,
      title: "Satisfactory Service",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus nec."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DentalFeatures;