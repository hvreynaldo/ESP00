import { describe, it, expect } from 'vitest';
import { authenticate, validatePassword } from '../utils/auth';

describe('Authentication', () => {
  it('should authenticate with correct credentials', async () => {
    const credentials = { username: 'ESP', password: 'Esp$' };
    const user = await authenticate(credentials);
    expect(user).toEqual({ username: 'ESP', role: 'admin' });
  });

  it('should reject invalid credentials', async () => {
    const credentials = { username: 'wrong', password: 'wrong' };
    await expect(authenticate(credentials)).rejects.toThrow('Invalid credentials');
  });
});

describe('Password Validation', () => {
  it('should validate correct password format', () => {
    expect(validatePassword('Esp$')).toBe(true);
    expect(validatePassword('Admin#123')).toBe(true);
  });

  it('should reject invalid password formats', () => {
    expect(validatePassword('esp')).toBe(false); // No uppercase or special char
    expect(validatePassword('ESP')).toBe(false); // No special char
    expect(validatePassword('esp$')).toBe(false); // No uppercase
    expect(validatePassword('Es$')).toBe(false); // Too short
  });
});