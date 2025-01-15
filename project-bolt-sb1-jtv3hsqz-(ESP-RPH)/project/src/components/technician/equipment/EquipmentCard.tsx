import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Equipment } from '../../../types/auth';

interface EquipmentCardProps {
  equipment: Equipment;
}

const EquipmentCard: React.FC<EquipmentCardProps> = ({ equipment }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/equipment/${equipment.id}/inspect`)}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
    >
      <img 
        src={equipment.imageUrl} 
        alt={equipment.type}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{equipment.type}</h3>
            <p className="text-gray-600">
              {equipment.make} {equipment.model} ({equipment.year})
            </p>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            Available
          </span>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Last Inspection: 03/14/2024</span>
            <span>Status: Operational</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentCard;