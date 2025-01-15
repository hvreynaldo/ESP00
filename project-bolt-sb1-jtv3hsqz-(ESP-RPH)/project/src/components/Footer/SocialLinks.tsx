import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export const SocialLinks = () => {
  return (
    <div className="flex space-x-4 mb-4 md:mb-0">
      <a href="#" className="hover:text-yellow-500"><Facebook className="w-6 h-6" /></a>
      <a href="#" className="hover:text-yellow-500"><Youtube className="w-6 h-6" /></a>
    </div>
  );
};