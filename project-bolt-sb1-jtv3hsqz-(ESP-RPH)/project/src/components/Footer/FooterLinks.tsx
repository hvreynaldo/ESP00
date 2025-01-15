import React from 'react';

interface FooterSectionProps {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:text-yellow-500">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};