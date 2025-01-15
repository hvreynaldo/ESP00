import React from 'react';
import { ChevronLeft, Tool } from 'lucide-react';
import { Equipment } from '../../../types/auth';

interface EquipmentHeaderProps {
  equipment: Equipment;
  onBack: () => void;
}

const EquipmentHeader: React.FC<EquipmentHeaderProps> = ({ equipment, onBack }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-3">
              <Tool className="w-6 h-6 text-yellow-500" />
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
  );
};

export default EquipmentHeader;