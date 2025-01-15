import React from 'react';

interface PageIndicatorProps {
  currentPage: number;
  totalPages: number;
}

const PageIndicator: React.FC<PageIndicatorProps> = ({ currentPage, totalPages }) => {
  return (
    <div className="flex items-center space-x-2">
      {Array.from({ length: totalPages }).map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full ${
            currentPage === index + 1 ? 'bg-yellow-500' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export default PageIndicator;