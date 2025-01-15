import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface StatusButtonsProps {
  status: 'pass' | 'fail' | null;
  onStatusChange: (status: 'pass' | 'fail') => void;
}

const StatusButtons: React.FC<StatusButtonsProps> = ({ status, onStatusChange }) => {
  return (
    <div className="flex space-x-4">
      <button
        type="button"
        onClick={() => onStatusChange('pass')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
          status === 'pass'
            ? 'bg-green-100 text-green-800'
            : 'bg-gray-100 text-gray-600 hover:bg-green-50'
        }`}
      >
        <CheckCircle className="w-5 h-5" />
        <span>Pass</span>
      </button>
      <button
        type="button"
        onClick={() => onStatusChange('fail')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
          status === 'fail'
            ? 'bg-red-100 text-red-800'
            : 'bg-gray-100 text-gray-600 hover:bg-red-50'
        }`}
      >
        <AlertCircle className="w-5 h-5" />
        <span>Fail</span>
      </button>
    </div>
  );
};

export default StatusButtons;