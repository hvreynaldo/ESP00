import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertCircle, CheckCircle } from 'lucide-react';
import { InspectionHistory } from '../../../types/inspection';

interface InspectionHistoryListProps {
  inspections: InspectionHistory[];
}

const InspectionHistoryList: React.FC<InspectionHistoryListProps> = ({ inspections }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Inspection History</h2>
      {inspections.map((inspection) => (
        <div key={inspection.id} className="bg-white rounded-lg shadow-sm">
          <div
            className="p-4 flex items-center justify-between cursor-pointer"
            onClick={() => toggleExpand(inspection.id)}
          >
            <div className="flex items-center space-x-4">
              {inspection.status === 'pass' ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-500" />
              )}
              <div>
                <p className="font-medium">
                  {new Date(inspection.date).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-600">
                  Inspector: {inspection.inspector.fullName}
                </p>
              </div>
            </div>
            {expandedId === inspection.id ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </div>
          
          {expandedId === inspection.id && (
            <div className="px-4 pb-4 border-t">
              <div className="mt-4">
                <h4 className="font-medium mb-2">Major Findings</h4>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {inspection.majorFindings.map((finding, index) => (
                    <li key={index}>{finding}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium mb-2">Inspection Details</h4>
                {inspection.details.items.map((item, index) => (
                  <div key={index} className="mb-2">
                    <p className="text-sm">
                      <span className="font-medium">{item.category}: </span>
                      {item.name} - 
                      <span className={`ml-1 ${
                        item.status === 'pass' 
                          ? 'text-green-600' 
                          : item.status === 'fail' 
                          ? 'text-red-600' 
                          : 'text-gray-600'
                      }`}>
                        {item.status.toUpperCase()}
                      </span>
                    </p>
                    {item.comment && (
                      <p className="text-sm text-gray-600 ml-4">{item.comment}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default InspectionHistoryList;