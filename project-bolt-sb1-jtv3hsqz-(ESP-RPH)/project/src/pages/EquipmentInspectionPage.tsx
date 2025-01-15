import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Construction, Truck, Wrench } from 'lucide-react';
import { Equipment } from '../types/auth';
import InspectionForm from '../components/technician/inspection/InspectionForm';

// Mock equipment data - In a real app, this would come from an API
const equipmentData: Record<string, Equipment> = {
  '1': {
    id: '1',
    type: 'Skid Steer',
    make: 'Bobcat',
    model: 'S650',
    year: '2023',
    icon: Construction
  },
  '2': {
    id: '2',
    type: 'Excavator',
    make: 'CAT',
    model: '320',
    year: '2022',
    icon: Truck
  },
  '3': {
    id: '3',
    type: 'Forklift',
    make: 'Toyota',
    model: '8FGU25',
    year: '2023',
    icon: Wrench
  }
};

const EquipmentInspectionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const equipment = id ? equipmentData[id] : null;

  if (!equipment) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Equipment Not Found</h2>
          <button
            onClick={() => navigate('/dashboard')}
            className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="text-gray-600 hover:text-gray-800"
              >
                ← Back to Dashboard
              </button>
              <div className="flex items-center space-x-3">
                <equipment.icon className="w-6 h-6 text-yellow-500" />
                <div>
                  <h1 className="text-xl font-semibold">{equipment.type}</h1>
                  <p className="text-sm text-gray-600">
                    {equipment.make} {equipment.model} ({equipment.year})
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <InspectionForm equipment={equipment} />
      </main>
    </div>
  );
};

export default EquipmentInspectionPage;