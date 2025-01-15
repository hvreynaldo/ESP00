import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { validatePassword } from '../utils/auth';
import { LoginForm } from './login/LoginForm';
import LoginHeader from './login/LoginHeader';
import { Modal } from './common/Modal';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [validationError, setValidationError] = useState('');
  const [lastUsername, setLastUsername] = useState<string>('');
  const { login, error: authError } = useAuth();

  useEffect(() => {
    const storedUsername = localStorage.getItem('lastUsername');
    if (storedUsername) {
      setLastUsername(storedUsername);
    }
  }, []);

  if (!isOpen) return null;

  const handleLogin = async (username: string, password: string) => {
    setValidationError('');

    if (!validatePassword(password)) {
      setValidationError('Password must contain at least one uppercase letter and one special character');
      return;
    }

    try {
      await login({ username, password });
      onClose();
    } catch (error) {
      // Error handling is managed by AuthContext
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <LoginHeader lastUsername={lastUsername} />
        
        <LoginForm 
          onSubmit={handleLogin}
          error={validationError || authError}
          initialUsername={lastUsername}
        />
      </div>
    </Modal>
  );
};

export default LoginModal;