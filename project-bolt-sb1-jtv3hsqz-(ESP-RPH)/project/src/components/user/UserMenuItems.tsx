import React from 'react';
import { Settings, LogOut, LayoutDashboard } from 'lucide-react';
import { User } from '../../types/auth';

interface UserMenuItemsProps {
  user: User;
  onLogout: () => void;
}

export const UserMenuItems: React.FC<UserMenuItemsProps> = ({ user, onLogout }) => (
  <>
    <div className="px-4 py-3 border-b border-gray-100">
      <p className="text-sm font-medium">{user.fullName || user.username}</p>
    </div>
    
    <a 
      href="/dashboard" 
      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
    >
      <LayoutDashboard className="w-4 h-4 mr-2" />
      Dashboard
    </a>
    
    <a 
      href="/settings" 
      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
    >
      <Settings className="w-4 h-4 mr-2" />
      Settings
    </a>
    
    <button 
      onClick={onLogout}
      className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-50 transition-colors"
    >
      <LogOut className="w-4 h-4 mr-2" />
      Log Out
    </button>
  </>
);