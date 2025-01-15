import React from 'react';
import { CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InspectionHistoryEntry {
  id: string;
  date: string;
  inspectorName: string;
  status: 'pass' | 'fail';
  keyFindings: string[];
}

const InspectionHistory: React.FC = () => {
  const today = new Date();
  const oneWeekAgo = new Date(today);
  oneWeekAgo.setDate(today.getDate() - 7);

  const mockHistory: InspectionHistoryEntry[] = [
    {
      id: '1',
      date: oneWeekAgo.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }),
      inspectorName: 'John Smith',
      status: 'pass',
      keyFindings: [
        'All systems operational',
        'Regular maintenance performed',
        'Minor wear on hydraulic seals - monitor'
      ]
    },
    {
      id: '2',
      date: today.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }),
      inspectorName: 'Sarah Johnson',
      status: 'pass',
      keyFindings: [
        'Equipment in good condition',
        'Updated safety features verified',
        'Recommended oil change in 50 hours'
      ]
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Previous Inspection History</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 border text-left">Inspection Date</th>
              <th className="px-4 py-2 border text-left">Inspector Name</th>
              <th className="px-4 py-2 border text-left">Overall Status</th>
              <th className="px-4 py-2 border text-left">Key Findings</th>
              <th className="px-4 py-2 border text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockHistory.map((entry) => (
              <tr key={entry.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{entry.date}</td>
                <td className="px-4 py-2 border">{entry.inspectorName}</td>
                <td className="px-4 py-2 border">
                  <div className="flex items-center">
                    {entry.status === 'pass' ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-green-700">Pass</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4 text-red-500 mr-1" />
                        <span className="text-red-700">Fail</span>
                      </>
                    )}
                  </div>
                </td>
                <td className="px-4 py-2 border">
                  <ul className="list-disc list-inside">
                    {entry.keyFindings.map((finding, idx) => (
                      <li key={idx} className="text-sm">{finding}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-4 py-2 border">
                  <Link
                    to={`/inspection/${entry.id}/review`}
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    <span>Review</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InspectionHistory;