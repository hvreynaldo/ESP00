import React, { useState } from 'react';
import { Calendar, Filter, Search } from 'lucide-react';
import EquipmentCard from '../ui/EquipmentCard';
import EquipmentFilters from '../ui/EquipmentFilters';
import { Equipment } from '../../../types/equipment';

const mockEquipment: Equipment[] = [
  {
    id: '1',
    name: 'Skid Steer',
    model: 'Bobcat S650',
    category: 'Heavy Equipment',
    dailyRate: 250,
    weeklyRate: 1000,
    specifications: {
      weight: '2,999 lbs',
      power: '74 HP',
      capacity: '2,690 lbs',
    },
    availability: true,
    image: 'https://images.unsplash.com/photo-1579001724923-d5927bd1c958'
  },
  // Add more equipment items...
];

const EquipmentRental = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex-1 min-w-[300px] relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search equipment..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
            <Calendar className="w-4 h-4 mr-2" />
            Check Availability
          </button>
        </div>
      </div>

      {showFilters && (
        <EquipmentFilters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockEquipment.map((equipment) => (
          <EquipmentCard key={equipment.id} equipment={equipment} />
        ))}
      </div>
    </div>
  );
};

export default EquipmentRental;