import React from 'react';

const EmergencySection = () => {
  return (
    <section className="min-h-[400px] grid md:grid-cols-2">
      <div className="bg-black text-white p-12 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">Emergency Response Ready</h2>
        <p className="text-lg mb-8">
          We provide the equipment and expertise to help you get back up and running fast.
        </p>
        <button className="bg-yellow-500 text-black px-8 py-3 rounded-md text-lg font-semibold hover:bg-yellow-400 transition-colors w-fit">
          Learn More
        </button>
      </div>
      <div 
        className="relative min-h-[300px] md:min-h-full"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-yellow-500 bg-opacity-30"></div>
      </div>
    </section>
  );
};

export default EmergencySection;