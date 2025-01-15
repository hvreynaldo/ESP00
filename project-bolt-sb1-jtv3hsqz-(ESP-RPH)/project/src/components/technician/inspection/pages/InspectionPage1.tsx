import React from 'react';
import { Equipment } from '../../../../types/auth';
import InspectionHistory from '../InspectionHistory';
import { checklistCategories } from '../../../../constants/checklist';
import ChecklistSection from '../ChecklistSection';

interface InspectionPage1Props {
  equipment: Equipment;
}

const InspectionPage1: React.FC<InspectionPage1Props> = ({ equipment }) => {
  const firstHalfCategories = checklistCategories.slice(0, Math.ceil(checklistCategories.length / 2));

  return (
    <div className="space-y-6">
      <InspectionHistory />
      
      {firstHalfCategories.map((category) => (
        <ChecklistSection
          key={category.name}
          category={category}
          items={{}}
          onStatusChange={() => {}}
          onPhotoUpload={() => {}}
          onPhotoRemove={() => {}}
        />
      ))}
    </div>
  );
};

export default InspectionPage1;