import React from 'react';
const ServiceCard = ({ title, description, image, icon }) => (
  <div className="group cursor-pointer">
    {/* Image Section */}
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    {/* Content Section */}
    <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-blue-500">
          {icon}
        </span>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="text-blue-500 flex items-center gap-2 group-hover:gap-3 transition-all">
        Learn More
        <svg 
          className="w-5 h-5 transition-transform group-hover:translate-x-1" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      title: "Teeth Checkup",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      )
    },
    {
      title: "Teeth Whitening",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M2 12h20"/>
          <path d="M12 2l4 4M12 8l4 4M12 14l4 4"/>
        </svg>
      )
    },
    {
      title: "Dental Braces",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 7h16M4 12h16M4 17h16"/>
        </svg>
      )
    },
    {
      title: "Teeth Implants",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "https://images.unsplash.com/photo-1579083390476-954d4ca9ed5d?q=80&w=800&auto=format&fit=crop",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M7 4.5v15M17 4.5v15"/>
        </svg>
      )
    },
    {
      title: "Dental Filling",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      )
    },
    {
      title: "Cosmetic",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <path d="M9 9h.01M15 9h.01"/>
        </svg>
      )
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 px-12">
      <div className="text-center mb-16">
        <p className="text-blue-500 font-medium mb-2">Our Services</p>
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-blue-500">Best Quality</span>
          <span className="text-gray-900"> Services</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Aenean commodo ligula aenean massa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;