import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Printer } from 'lucide-react';
import InspectionReviewHeader from '../components/technician/inspection/review/InspectionReviewHeader';
import InspectionReviewDetails from '../components/technician/inspection/review/InspectionReviewDetails';
import InspectionReviewChecklist from '../components/technician/inspection/review/InspectionReviewChecklist';

const InspectionReviewPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // In a real app, fetch inspection data based on id
  const mockInspection = {
    id,
    date: '12/22/2024',
    inspector: {
      name: 'Sarah Johnson',
      role: 'Senior Technician'
    },
    equipment: {
      type: 'Skid Steer',
      make: 'Bobcat',
      model: 'S650',
      year: '2023'
    },
    status: 'pass' as const,
    keyFindings: [
      'Equipment in good condition',
      'Updated safety features verified',
      'Recommended oil change in 50 hours'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <InspectionReviewHeader 
        inspection={mockInspection}
        onBack={() => navigate(-1)}
        onPrint={() => window.print()}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <InspectionReviewDetails inspection={mockInspection} />
          <InspectionReviewChecklist inspectionId={mockInspection.id} />
        </div>
      </main>
    </div>
  );
};

export default InspectionReviewPage;