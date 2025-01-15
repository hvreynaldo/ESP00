import React from 'react';
import { checklistCategories } from '../../../../constants/checklist';

interface InspectionReviewChecklistProps {
  inspectionId: string;
}

const InspectionReviewChecklist: React.FC<InspectionReviewChecklistProps> = ({ inspectionId }) => {
  // Mock data - In a real app, fetch this based on inspectionId
  const mockResults = {
    'Tires and Rims-Tread': { condition: 'good', photos: [] },
    'Hydraulics-Fluid': { condition: 'moderate', photos: [] },
    'Engine-Oil': { condition: 'good', photos: [] }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-6">Inspection Checklist</h3>
      
      {checklistCategories.map((category) => (
        <div key={category.name} className="mb-8 last:mb-0">
          <h4 className="font-medium mb-4">{category.name}</h4>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="grid grid-cols-4 gap-4 mb-2 font-medium text-sm">
              <div>Item</div>
              <div className="text-center bg-[#E6FFE6] rounded py-1">Good</div>
              <div className="text-center bg-[#FFFFE6] rounded py-1">Moderate</div>
              <div className="text-center bg-[#FFE6E6] rounded py-1">Poor</div>
            </div>
            
            {category.items.map((item) => {
              const itemId = `${category.name}-${item}`;
              const result = mockResults[itemId];
              
              return (
                <div key={item} className="grid grid-cols-4 gap-4 py-2 border-t border-gray-200">
                  <div>{item}</div>
                  <div className="text-center">
                    {result?.condition === 'good' && '✓'}
                  </div>
                  <div className="text-center">
                    {result?.condition === 'moderate' && '✓'}
                  </div>
                  <div className="text-center">
                    {result?.condition === 'poor' && '✓'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InspectionReviewChecklist;