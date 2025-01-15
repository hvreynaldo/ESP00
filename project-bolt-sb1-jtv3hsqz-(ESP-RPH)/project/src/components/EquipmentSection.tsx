import React from 'react';
import { equipmentData } from '../constants/equipment';

const EquipmentSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="equipment">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Equipment for Every Need</h2>
        <div className="flex overflow-x-auto pb-8 space-x-6">
          {equipmentData.map((item, index) => (
            <div key={index} className="flex-none w-80 bg-white rounded-lg shadow-lg">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-1">{item.brand}</p>
                <p className="text-gray-600 mb-4">{item.specs}</p>
                <button className="text-yellow-500 font-semibold hover:text-yellow-600">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;