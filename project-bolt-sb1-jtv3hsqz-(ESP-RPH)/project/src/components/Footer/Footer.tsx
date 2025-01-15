import React from 'react';
import { SocialLinks } from './SocialLinks';
import { FooterSection } from './FooterLinks';

const Footer = () => {
  const companyLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Investors', href: '#' }
  ];

  const supportLinks = [
    { label: 'Contact', href: '#' },
    { label: 'Feedback', href: '#' },
    { label: 'Chat with Expert', href: '#' },
    { label: '1-800-123-4567', href: 'tel:1-800-123-4567' }
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <FooterSection title="Company Information" links={companyLinks} />
          <FooterSection title="Support" links={supportLinks} />
        </div>
        
        <div className="flex flex-wrap justify-between items-center pt-8 border-t border-gray-800">
          <SocialLinks />
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} ESP Real Property Holdings. | 
            <a href="#" className="hover:text-yellow-500"> Privacy Policy</a> | 
            <a href="#" className="hover:text-yellow-500"> Terms of Use</a> | 
            <a href="#" className="hover:text-yellow-500"> Legal</a> | 
            <a href="#" className="hover:text-yellow-500"> Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;