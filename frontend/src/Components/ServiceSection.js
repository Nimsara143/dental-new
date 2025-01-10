import React from 'react';

const ServiceBox = ({ bgColor, icon, title, description }) => (
  <div className={`${bgColor} p-8 text-center h-full`}>
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
    <p className="text-white/80 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const ServicesGrid = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* First Image */}
        <div className="h-[300px]">
          <img
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
            alt="Dental Checkup"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Best Services Box */}
        <ServiceBox  
          bgColor="bg-blue-500"
          icon={
            <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 14c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" />
              <path d="M16 8v2" />
              <path d="M8 8v2" />
              <path d="M12 16v2" />
              <path d="M16 16v2" />
              <path d="M8 16v2" />
            </svg>
          }
          title="The Best Services"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna."
        />

        {/* Second Image */}
        <div className="h-[300px]">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
            alt="Dental Treatment"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Expert Doctor Box */}
        <ServiceBox
          bgColor="bg-[#1a237e]"
          icon={
            <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 7h-7m-7 0H4" />
              <path d="M20 7v7c0 3-2.03 5-5 5H9c-2.97 0-5-2-5-5V7" />
              <path d="M12 4c1.93 0 3.5 1.57 3.5 3.5S13.93 11 12 11s-3.5-1.57-3.5-3.5S10.07 4 12 4z" />
            </svg>
          }
          title="Expert Doctor"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna."
        />

        {/* Third Image */}
        <div className="h-[300px]">
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
            alt="Dental Care"
            className="w-full h-full object-cover"
          />
        </div>

         {/* Expert Doctor Box */}
         <ServiceBox
          bgColor="bg-[#1a237e]"
          icon={
            <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 7h-7m-7 0H4" />
              <path d="M20 7v7c0 3-2.03 5-5 5H9c-2.97 0-5-2-5-5V7" />
              <path d="M12 4c1.93 0 3.5 1.57 3.5 3.5S13.93 11 12 11s-3.5-1.57-3.5-3.5S10.07 4 12 4z" />
            </svg>
          }
          title="Expert Doctor"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna."
        />

      </div>
    </div>
  );
};

export default ServicesGrid;