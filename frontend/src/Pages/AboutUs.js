import React from 'react';
import { Play } from 'lucide-react';
import FAQSection from '../Components/FAQSection';
import AboutUS from '../Components/About Us';

const AboutHero = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header Content */}
      <div className="container mx-auto px-4 pt-16 text-center">
        <div className="text-blue-600 mb-2">About Us</div>
        <h1 className="text-5xl font-bold mb-4">
          We Are <span className="text-blue-600">Dentic</span>
          <span className="inline-block ml-1 text-blue-600">✦</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Nullam quis ante. Etiam sit amet orci eget eros faucibus
          tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
        </p>
      </div>

    {/* Image Section */}
<div className="container mx-auto px-4 relative">
  {/* Video Section */}
  <div className="container mx-auto px-6 relative"> {/* Increased px for more padding */}
    <div className="relative rounded-lg overflow-hidden max-w-[800px] mx-auto"> {/* Limit width and center */}
      <iframe
        width="800" /* Reduced width */
        height="450" /* Adjusted proportionally */
        src="https://www.youtube.com/embed/lw7xIB0kPCo"
        title="Dental Ad Video Template (Editable)"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full rounded-lg"
      ></iframe>
    </div>
  </div>
</div>
<AboutUS /> 
<FAQSection />

</div>

    //   </div>
    //  
    // </div>
  );
};

export default AboutHero;