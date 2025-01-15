import React from 'react';
import { Equipment } from '../../../../types/auth';
import { checklistCategories } from '../../../../constants/checklist';
import ChecklistSection from '../ChecklistSection';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface InspectionPage2Props {
  equipment: Equipment;
}

const InspectionPage2: React.FC<InspectionPage2Props> = ({ equipment }) => {
  const secondHalfCategories = checklistCategories.slice(Math.ceil(checklistCategories.length / 2));

  return (
    <div className="space-y-6">
      {secondHalfCategories.map((category) => (
        <ChecklistSection
          key={category.name}
          category={category}
          items={{}}
          onStatusChange={() => {}}
          onPhotoUpload={() => {}}
          onPhotoRemove={() => {}}
        />
      ))}

      <div>
        <h3 className="text-lg font-semibold mb-4">Overall Status</h3>
        <div className="flex space-x-4">
          <button
            type="button"
            className="flex items-center space-x-2 px-4 py-2 rounded-md bg-gray-100 text-gray-600 hover:bg-green-50"
          >
            <CheckCircle className="w-5 h-5" />
            <span>Pass</span>
          </button>
          <button
            type="button"
            className="flex items-center space-x-2 px-4 py-2 rounded-md bg-gray-100 text-gray-600 hover:bg-red-50"
          >
            <AlertCircle className="w-5 h-5" />
            <span>Fail</span>
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Additional Notes</h3>
        <textarea
          className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Enter any additional observations or comments..."
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Save Draft
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
        >
          Submit Inspection
        </button>
      </div>
    </div>
  );
};

export default InspectionPage2;