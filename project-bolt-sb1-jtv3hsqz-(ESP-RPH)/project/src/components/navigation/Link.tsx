import React from 'react';
import { LucideIcon } from 'lucide-react';

interface LinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
}

export const Link: React.FC<LinkProps> = ({ href, icon: Icon, label, isActive }) => (
  <a
    href={href}
    className={`
      flex items-center space-x-2 px-2 py-1 rounded transition-colors
      ${isActive 
        ? 'text-yellow-500 font-medium' 
        : 'text-gray-600 hover:text-yellow-500'
      }
    `}
  >
    <Icon className="w-4 h-4" />
    <span>{label}</span>
  </a>
);