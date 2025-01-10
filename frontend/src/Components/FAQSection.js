import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(0);

  const faqData = [
    {
      question: "How often should I have a dental check-up?",
      answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."
    },
    {
      question: "What should I do if I have a dental emergency?",
      answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
    },
    {
      question: "What is your approach to pain management during dental procedures?",
      answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
    },
    {
      question: "What options are available for replacing missing teeth?",
      answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
    },
    {
      question: "How can I prepare my child for their first dental visit?",
      answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-blue-500 text-sm mb-2">FAQ</p>
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-blue-500">Frequently</span> Asked Question
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Aenean commodo ligula aenean massa.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}
              className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50"
            >
              <h3 className={`font-medium text-left ${openQuestion === index ? 'text-blue-500' : 'text-gray-900'}`}>
                {faq.question}
              </h3>
              {openQuestion === index ? (
                <ChevronUp className="w-5 h-5 text-blue-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            
            {openQuestion === index && (
              <div className="px-6 py-4 bg-white">
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;