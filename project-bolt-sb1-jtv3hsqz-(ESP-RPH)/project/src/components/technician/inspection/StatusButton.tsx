import React from 'react';

interface StatusButtonProps {
  condition: 'good' | 'moderate' | 'poor';
  selected: boolean;
  onClick: () => void;
}

const StatusButton: React.FC<StatusButtonProps> = ({ condition, selected, onClick }) => {
  const baseClasses = "w-full px-3 py-1 rounded transition-colors text-center";
  const colorClasses = {
    good: selected ? "bg-green-100 text-green-800" : "bg-white text-gray-600 hover:bg-[#E6FFE6]",
    moderate: selected ? "bg-yellow-100 text-yellow-800" : "bg-white text-gray-600 hover:bg-[#FFFFE6]",
    poor: selected ? "bg-red-100 text-red-800" : "bg-white text-gray-600 hover:bg-[#FFE6E6]"
  };

  return (
    <button
      type="button"
      className={`${baseClasses} ${colorClasses[condition]}`}
      onClick={onClick}
    >
      {condition.charAt(0).toUpperCase() + condition.slice(1)}
    </button>
  );
};

export default StatusButton;