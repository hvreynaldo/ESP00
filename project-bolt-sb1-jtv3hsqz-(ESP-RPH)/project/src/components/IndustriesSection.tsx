import React from 'react';
import { industries } from '../constants/industries';

const IndustriesSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="industries">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Industries We Support</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img 
                src={industry.image} 
                alt={industry.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold mb-2">{industry.title}</h3>
                <p className="text-white text-sm">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="text-yellow-500 font-semibold hover:text-yellow-600">
            See More Industries →
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;