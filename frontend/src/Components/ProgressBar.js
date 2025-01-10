import React from 'react';
import { Sparkles, Clock, User, CheckCircle, Check } from 'lucide-react';

const ProgressBar = ({ currentStep }) => {
  const steps = [
    { id: 1, label: 'Choose Service', icon: <Sparkles size={16} /> },
    { id: 2, label: 'Pick Time', icon: <Clock size={16} /> },
    { id: 3, label: 'Your Details', icon: <User size={16} /> },
    { id: 4, label: 'Confirmation', icon: <CheckCircle size={16} /> },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="relative">
        <div className="absolute top-[1.5rem] left-[10%] right-[10%] h-0.5 bg-gray-100" />
        <div
          className="absolute top-[1.5rem] left-[10%] h-0.5 bg-blue-500 transition-all duration-500"
          style={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 80}%`,
          }}
        />
        <div className="relative flex justify-between">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                  currentStep === step.id
                    ? 'bg-blue-500 scale-110'
                    : currentStep > step.id
                    ? 'bg-blue-500'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                {currentStep > step.id ? (
                  <Check className="w-5 h-5 text-white" />
                ) : (
                  step.icon
                )}
              </div>
              <span className="mt-2 text-xs font-medium">
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
