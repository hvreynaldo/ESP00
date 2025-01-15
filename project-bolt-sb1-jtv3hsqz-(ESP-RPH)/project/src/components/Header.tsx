import React, { useState } from 'react';
import { Search, ShoppingCart, Menu } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import LoginModal from './LoginModal';
import UserMenu from './user/UserMenu';

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold">ESP</h1>
          <div className="hidden md:flex space-x-6">
            {isAuthenticated && user?.role === 'technician' ? (
              <>
                <a href="/dashboard" className="hover:text-yellow-500">Dashboard</a>
                <a href="/inspections" className="hover:text-yellow-500">Inspections</a>
                <a href="/equipment" className="hover:text-yellow-500">Equipment</a>
              </>
            ) : (
              <>
                <a href="#equipment" className="hover:text-yellow-500">Equipment & Solutions</a>
                <a href="#industries" className="hover:text-yellow-500">Industries</a>
                <a href="#services" className="hover:text-yellow-500">Services</a>
                <a href="#contact" className="hover:text-yellow-500">Contact</a>
              </>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ShoppingCart className="w-5 h-5" />
          </button>
          {isAuthenticated ? (
            <UserMenu />
          ) : (
            <button 
              onClick={() => setIsLoginModalOpen(true)}
              className="px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-400 transition-colors"
            >
              Login
            </button>
          )}
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </header>
  );
};

export default Header;