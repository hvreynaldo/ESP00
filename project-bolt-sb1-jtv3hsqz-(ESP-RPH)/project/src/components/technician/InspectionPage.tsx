import React from 'react';
import { ChevronLeft } from 'lucide-react';
import InspectionChecklist from './InspectionChecklist';

interface InspectionPageProps {
  equipmentId: string;
}

const InspectionPage: React.FC<InspectionPageProps> = ({ equipmentId }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow mb-6">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => window.history.back()}
                className="text-gray-600 hover:text-gray-800"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h1 className="text-xl font-semibold">Equipment Inspection</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <InspectionChecklist equipmentId={equipmentId} />
      </main>
    </div>
  );
};

export default InspectionPage;