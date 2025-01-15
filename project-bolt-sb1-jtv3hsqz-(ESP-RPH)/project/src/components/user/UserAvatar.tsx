import React from 'react';
import { User } from '../../types/auth';

interface UserAvatarProps {
  user: User;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ user }) => (
  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
    <span className="text-white font-semibold">
      {user.username.charAt(0).toUpperCase()}
    </span>
  </div>
);