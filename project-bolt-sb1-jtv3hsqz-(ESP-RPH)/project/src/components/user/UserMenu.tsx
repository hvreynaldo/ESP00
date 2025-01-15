import React, { useRef, useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { UserAvatar } from './UserAvatar';
import { UserMenuItems } from './UserMenuItems';

const UserMenu: React.FC = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!user) return null;

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <UserAvatar user={user} />
        <span className="hidden md:block text-sm font-medium">
          {user.fullName || user.username}
        </span>
      </button>

      <div
        className={`
          absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1
          transform origin-top-right transition-all duration-200 ease-in-out
          ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
        `}
      >
        <UserMenuItems user={user} onLogout={logout} />
      </div>
    </div>
  );
};

export default UserMenu;