import React from 'react';

const TestimonialCard = ({ content, name, role, image }) => (
  <div className="bg-white rounded-xl p-8 flex items-start gap-8 mb-6 shadow-lg hover:shadow-xl transition-shadow h-64">
    <div className="flex-1 flex flex-col">
      <div className="text-blue-500 text-4xl font-serif mb-4">❞</div>
      <p className="text-gray-600 mb-4 line-clamp-4 flex-1">
        {content}
      </p>
      <div className="mt-auto">
        <h4 className="font-medium text-gray-900">{name}</h4>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
    <div className="w-32 h-32 flex-shrink-0">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover rounded-lg shadow-md"
      />
    </div>
  </div>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      name: "José Correia",
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&auto=format&fit=crop"
    },
    {
      content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      name: "Agathe Dufour",
      role: "Company CEO",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250&auto=format&fit=crop"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 px-12">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/2 md:sticky md:top-8">
          <p className="text-blue-500 mb-4">Our Testimonial</p>
          <h2 className="text-4xl font-bold mb-4">
            The <span className="text-blue-500">Honest Review</span><br />
            From Our Client
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
            natoque penatibus et magnis dis parturient.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            See All Review
          </button>
        </div>

        <div className="md:w-1/2 space-y-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;