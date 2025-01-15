import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Equipment } from '../../../types/auth';
import InspectionPage1 from './pages/InspectionPage1';
import InspectionPage2 from './pages/InspectionPage2';
import PageIndicator from './PageIndicator';

interface PaginatedInspectionFormProps {
  equipment: Equipment;
}

const PaginatedInspectionForm: React.FC<PaginatedInspectionFormProps> = ({ equipment }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Equipment Inspection Form</h2>

      <div className="mb-8">
        {currentPage === 1 && <InspectionPage1 equipment={equipment} />}
        {currentPage === 2 && <InspectionPage2 equipment={equipment} />}
      </div>

      <div className="flex items-center justify-between mt-8 border-t pt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
            currentPage === 1
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Previous</span>
        </button>

        <PageIndicator currentPage={currentPage} totalPages={totalPages} />

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
            currentPage === totalPages
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <span>Next</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default PaginatedInspectionForm;