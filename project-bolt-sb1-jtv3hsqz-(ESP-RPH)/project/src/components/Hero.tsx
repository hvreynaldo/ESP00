import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          style={{ opacity: 0.7 }}
        >
          <source 
            src="https://res.cloudinary.com/dsxhbkdlk/video/upload/v1734534381/ae8d45eb-866a-4bb1-a403-7b64d5fe6e19_xe2ari.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Trusted Equipment Solutions for Every Project
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Reliable, efficient, and tailored to meet your needs
          </p>
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-md text-lg font-semibold hover:bg-yellow-400 transition-colors">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;