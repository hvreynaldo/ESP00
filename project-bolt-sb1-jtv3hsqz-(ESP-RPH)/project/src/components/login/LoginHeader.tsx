import React from 'react';
import { User } from 'lucide-react';

interface LoginHeaderProps {
  lastUsername?: string;
}

const LoginHeader: React.FC<LoginHeaderProps> = ({ lastUsername }) => {
  return (
    <div className="text-center mb-6">
      <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
        <User className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-2xl font-bold">
        {lastUsername ? `Welcome Back, ${lastUsername}` : 'Welcome Back'}
      </h2>
      <p className="text-gray-600">Sign in to continue</p>
    </div>
  );
};

export default LoginHeader;