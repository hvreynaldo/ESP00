import React from 'react';
import { ArrowLeft, Printer } from 'lucide-react';

interface InspectionReviewHeaderProps {
  inspection: {
    date: string;
    equipment: {
      type: string;
      make: string;
      model: string;
      year: string;
    };
  };
  onBack: () => void;
  onPrint: () => void;
}

const InspectionReviewHeader: React.FC<InspectionReviewHeaderProps> = ({
  inspection,
  onBack,
  onPrint
}) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-xl font-semibold">Inspection Report</h1>
              <p className="text-sm text-gray-600">
                {inspection.equipment.type} - {inspection.equipment.make} {inspection.equipment.model} ({inspection.equipment.year})
              </p>
              <p className="text-sm text-gray-600">
                Inspection Date: {inspection.date}
              </p>
            </div>
          </div>
          <button
            onClick={onPrint}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            <Printer className="w-5 h-5" />
            <span>Print Report</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default InspectionReviewHeader;