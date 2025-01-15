import React, { useState, useEffect } from 'react';

interface LoginFormProps {
  onSubmit: (username: string, password: string) => Promise<void>;
  error?: string | null;
  initialUsername?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, error, initialUsername }) => {
  const [username, setUsername] = useState(initialUsername || '');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (initialUsername) {
      setUsername(initialUsername);
    }
  }, [initialUsername]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(username, password);
    // Store username in localStorage after successful submission
    localStorage.setItem('lastUsername', username);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
          required
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      <button
        type="submit"
        className="w-full bg-yellow-500 text-black py-2 px-4 rounded-md hover:bg-yellow-400 transition-colors"
      >
        Login
      </button>
    </form>
  );
};