import React from 'react';
import { Home, Settings, LayoutDashboard } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface DashboardNavProps {
  currentPath: string;
}

export const DashboardNav: React.FC<DashboardNavProps> = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/dashboard', label: 'Technician Dashboard', icon: LayoutDashboard },
    { path: '/settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center space-x-2">
        {links.map((link, index) => (
          <React.Fragment key={link.path}>
            <Link
              to={link.path}
              className={`
                flex items-center space-x-2 px-2 py-1 rounded transition-colors
                ${currentPath === link.path 
                  ? 'text-yellow-500 font-medium' 
                  : 'text-gray-600 hover:text-yellow-500'
                }
              `}
            >
              <link.icon className="w-4 h-4" />
              <span>{link.label}</span>
            </Link>
            {index < links.length - 1 && (
              <span className="text-gray-400 mx-2">/</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};