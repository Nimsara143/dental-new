import React from 'react';
import { Check } from 'lucide-react';

const FeatureItem = ({ children }) => (
  <div className="flex items-center gap-2">
    <div className="rounded-full bg-blue-500 p-1">
      <Check className="w-4 h-4 text-white" />
    </div>
    <span className="text-gray-600">{children}</span>
  </div>
);

const ImageBubble = ({ src, alt, className }) => (
  <div className={`absolute w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg z-20 ${className}`}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
    />
  </div>
);

const AboutUS = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-12">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image with decorative elements */}
          <div className="relative">
            {/* Main background blobs */}
            <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-2xl transform -rotate-12" />
            <div className="absolute inset-0 bg-blue-50/30 rounded-full blur-xl transform rotate-45" />
            
            {/* Main image container */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=800&auto=format&fit=crop"
                alt="Dental Professional"
                className="relative z-10 rounded-lg shadow-xl"
              />
              
              {/* Decorative image bubbles */}
              <ImageBubble 
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=200&auto=format&fit=crop"
                alt="Dental Equipment"
                className="top-4 left-4"
              />
              <ImageBubble 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=200&auto=format&fit=crop"
                alt="Dental Procedure"
                className="bottom-4 right-4"
              />
              <ImageBubble 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=200&auto=format&fit=crop"
                alt="Dental Consultation"
                className="top-20 right-0"
              />
              <ImageBubble 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=200&auto=format&fit=crop"
                alt="Modern Dental Office"
                className="bottom-20 left-0"
              />

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full z-0" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-50 rounded-full z-0" />
              
              {/* Additional floating elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                w-48 h-48 bg-blue-200/20 rounded-full blur-xl z-0 animate-pulse" />
            </div>

            {/* Stats overlay */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
              bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-blue-50 z-30">
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">20+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5000+</div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-50 rounded-full">
              <span className="text-blue-600 font-medium">More About Us</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              The Best <span className="text-blue-500">Dental Clinic</span>
              <br />That You Can Trust
            </h1>

            <div className="space-y-4 text-gray-600">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                natoque penatibus et magnis dis parturient.
              </p>
              <p>
                Nullam quis ante. Etiam sit amet orci eget eros faucibus 
                tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FeatureItem>Modern Equipment</FeatureItem>
              <FeatureItem>Easy Online Appointment</FeatureItem>
              <FeatureItem>Comfortable Clinic</FeatureItem>
              <FeatureItem>Always Monitored</FeatureItem>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg 
                hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30 
                hover:shadow-blue-500/40 transform hover:-translate-y-0.5">
                Learn More
              </button>
              <button className="px-6 py-3 bg-gray-50 text-gray-800 rounded-lg 
                hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg 
                transform hover:-translate-y-0.5">
                Make an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;