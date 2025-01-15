import React from 'react';
import { Equipment } from '../../types/auth';
import EquipmentCard from './equipment/EquipmentCard';

const equipmentList: Equipment[] = [
  {
    id: '1',
    type: 'Skid Steer',
    make: 'Bobcat',
    model: 'S650',
    year: '2023',
    imageUrl: 'https://res.cloudinary.com/dsxhbkdlk/image/upload/v1734550854/PXL_20241218_162950129_m3xqhu.jpg'
  },
  {
    id: '2',
    type: 'Excavator',
    make: 'CAT',
    model: '320',
    year: '2022',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    type: 'Forklift',
    make: 'Toyota',
    model: '8FGU25',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const EquipmentList: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {equipmentList.map((equipment) => (
        <EquipmentCard key={equipment.id} equipment={equipment} />
      ))}
    </div>
  );
};

export default EquipmentList;