import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface InspectionReviewDetailsProps {
  inspection: {
    date: string;
    inspector: {
      name: string;
      role: string;
    };
    status: 'pass' | 'fail';
    keyFindings: string[];
  };
}

const InspectionReviewDetails: React.FC<InspectionReviewDetailsProps> = ({ inspection }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Inspection Details</h3>
          <dl className="space-y-2">
            <div>
              <dt className="text-sm text-gray-600">Inspector</dt>
              <dd className="font-medium">{inspection.inspector.name}</dd>
              <dd className="text-sm text-gray-600">{inspection.inspector.role}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-600">Date</dt>
              <dd className="font-medium">{inspection.date}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-600">Status</dt>
              <dd>
                <div className="flex items-center mt-1">
                  {inspection.status === 'pass' ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-500 mr-1" />
                      <span className="text-green-700 font-medium">Pass</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-5 h-5 text-red-500 mr-1" />
                      <span className="text-red-700 font-medium">Fail</span>
                    </>
                  )}
                </div>
              </dd>
            </div>
          </dl>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Key Findings</h3>
          <ul className="space-y-2">
            {inspection.keyFindings.map((finding, index) => (
              <li key={index} className="flex items-start">
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 mr-2"></span>
                <span>{finding}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InspectionReviewDetails;