import { LoginCredentials, User } from '../types/auth';

export const authenticate = async (credentials: LoginCredentials): Promise<User> => {
  await new Promise(resolve => setTimeout(resolve, 500));

  if (credentials.username === 'ESP' && credentials.password === 'Esp$') {
    return {
      username: 'ESP',
      role: 'admin',
      fullName: 'ESP Admin'
    };
  }

  if (credentials.username === 'tech' && credentials.password === 'tech123') {
    return {
      username: 'tech',
      role: 'technician',
      fullName: 'John Smith'
    };
  }

  throw new Error('Invalid credentials');
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};