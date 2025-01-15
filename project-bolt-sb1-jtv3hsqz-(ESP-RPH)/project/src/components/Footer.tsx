import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-500">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-500">Investors</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Careers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-500">Search Jobs</a></li>
              <li><a href="#" className="hover:text-yellow-500">Military Friendly</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
              <li><a href="#" className="hover:text-yellow-500">Feedback</a></li>
              <li><a href="#" className="hover:text-yellow-500">Chat with Expert</a></li>
              <li><a href="tel:1-800-123-4567" className="hover:text-yellow-500">1-800-123-4567</a></li>
            </ul>
          </div>
          <div>
          </div>
        </div>
          </div>
        <div className="flex flex-wrap justify-between items-center pt-8 border-t border-gray-800">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-yellow-500"><Facebook className="w-6 h-6" /></a>
            <a href="#" className="hover:text-yellow-500"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="hover:text-yellow-500"><Linkedin className="w-6 h-6" /></a>
            <a href="#" className="hover:text-yellow-500"><Twitter className="w-6 h-6" /></a>
            <a href="#" className="hover:text-yellow-500"><Youtube className="w-6 h-6" /></a>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 ESP Real Property Holdings. | 
            <a href="#" className="hover:text-yellow-500"> Privacy Policy</a> | 
            <a href="#" className="hover:text-yellow-500"> Terms of Use</a> | 
            <a href="#" className="hover:text-yellow-500"> Legal</a> | 
            <a href="#" className="hover:text-yellow-500"> Site Map</a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;