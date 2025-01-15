import React, { useState } from 'react';
import { Equipment } from '../../../types/auth';
import { checklistCategories } from '../../../constants/checklist';
import ChecklistSection from './ChecklistSection';
import InspectionHistory from './InspectionHistory';
import StatusButtons from './status/StatusButtons';
import DateInput from './date/DateInput';

interface InspectionFormProps {
  equipment: Equipment;
}

const InspectionForm: React.FC<InspectionFormProps> = ({ equipment }) => {
  const [inspectionData, setInspectionData] = useState<Record<string, any>>({});
  const [overallStatus, setOverallStatus] = useState<'pass' | 'fail' | null>(null);
  const [inspectionDate, setInspectionDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Equipment Inspection Form</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <InspectionHistory />

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Overall Status</h3>
            <StatusButtons 
              status={overallStatus} 
              onStatusChange={setOverallStatus} 
            />
          </div>
          <DateInput 
            value={inspectionDate}
            onChange={setInspectionDate}
          />
        </div>

        {checklistCategories.map((category) => (
          <ChecklistSection
            key={category.name}
            category={category}
            items={inspectionData}
            onStatusChange={(itemId, status) => {
              setInspectionData(prev => ({
                ...prev,
                [itemId]: { ...prev[itemId], condition: status }
              }));
            }}
            onPhotoUpload={(itemId, files) => {
              setInspectionData(prev => ({
                ...prev,
                [itemId]: {
                  ...prev[itemId],
                  photos: [...(prev[itemId]?.photos || []), ...Array.from(files)]
                }
              }));
            }}
            onPhotoRemove={(itemId, photoIndex) => {
              setInspectionData(prev => ({
                ...prev,
                [itemId]: {
                  ...prev[itemId],
                  photos: prev[itemId]?.photos.filter((_, idx) => idx !== photoIndex)
                }
              }));
            }}
          />
        ))}

        <div>
          <h3 className="text-lg font-semibold mb-4">Additional Notes</h3>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
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
      </form>
    </div>
  );
};

export default InspectionForm;