import React from 'react';
import { useNavigate } from 'react-router-dom';
import EquipmentHeader from './EquipmentHeader';
import InspectionHistoryList from './InspectionHistoryList';
import InspectionChecklist from '../InspectionChecklist';
import { Equipment } from '../../../types/auth';
import { InspectionHistory } from '../../../types/inspection';

// Mock data - In production, this would come from an API
const mockEquipment: Equipment = {
  id: '1',
  type: 'Skid Steer',
  make: 'Bobcat',
  model: 'S650',
  year: '2023',
  icon: () => null
};

const mockInspections: InspectionHistory[] = [
  {
    id: '1',
    date: '2024-01-15',
    status: 'pass',
    inspector: {
      username: 'john.doe',
      fullName: 'John Doe',
      role: 'technician'
    },
    majorFindings: [
      'All systems operational',
      'Minor wear on front tires'
    ],
    details: {
      items: [
        {
          category: 'Tires',
          name: 'Front Tires',
          status: 'pass',
          comment: 'Shows normal wear'
        },
        {
          category: 'Engine',
          name: 'Oil Level',
          status: 'pass',
          comment: 'Recently changed'
        }
      ],
      comments: 'Regular maintenance performed',
      photos: [],
      signature: 'John Doe',
      timestamp: '2024-01-15T10:30:00Z'
    }
  }
];

const EquipmentDetailsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <EquipmentHeader 
        equipment={mockEquipment}
        onBack={() => navigate('/dashboard')}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <InspectionHistoryList inspections={mockInspections} />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">New Inspection</h2>
            <InspectionChecklist equipmentId={mockEquipment.id} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default EquipmentDetailsPage;