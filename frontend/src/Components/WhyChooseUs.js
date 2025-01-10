import React from 'react';

const ProgressBar = ({ label, percentage }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-gray-800 font-medium">{label}</span>
      <span className="text-blue-500 font-medium">{percentage}%</span>
    </div>
    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
      <div 
        className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

const WhyChooseUs = () => {
  return (
    <div className="bg-white py-16 px-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="text-blue-600 font-medium mb-3">Why Choose Us</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Helping Your{' '}
                <span className="text-blue-500 relative">
                  Dental Problems
                  <svg
                    className="absolute -right-8 -top-1 w-6 h-6 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                  </svg>
                </span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                natoque penatibus et magnis dis parturient.
              </p>
            </div>

            <div className="space-y-6">
              <ProgressBar label="Dental and Mouth Care" percentage={95} />
              <ProgressBar label="Cosmetic Treatment" percentage={87} />
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-50 rounded-3xl transform rotate-3" />
            <div className="relative bg-white rounded-3xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Don't Hesitate to Do Consultation
              </h3>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut elit tellus, luctus nec.
              </p>
              
              <div className="space-y-4">
                {[
                  { day: 'Monday - Friday', hours: '8AM - 10PM' },
                  { day: 'Saturday', hours: '8AM - 10PM' },
                  { day: 'Sunday', hours: '8AM - 10PM' },
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-800 font-medium">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 bg-blue-500 text-white py-3 px-6 rounded-lg 
                hover:bg-blue-600 transition-colors font-medium">
                Call +01234 567 890
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;