import React from 'react';
import { Camera } from 'lucide-react';
import { ChecklistCategory } from '../../../types/inspection';
import StatusButton from './StatusButton';
import PhotoPreview from './PhotoPreview';

interface ChecklistSectionProps {
  category: ChecklistCategory;
  items: Record<string, { condition?: 'good' | 'moderate' | 'poor'; photos: File[] }>;
  onStatusChange: (itemId: string, status: 'good' | 'moderate' | 'poor') => void;
  onPhotoUpload: (itemId: string, files: FileList) => void;
  onPhotoRemove: (itemId: string, photoIndex: number) => void;
}

const ChecklistSection: React.FC<ChecklistSectionProps> = ({
  category,
  items,
  onStatusChange,
  onPhotoUpload,
  onPhotoRemove
}) => {
  return (
    <div className="mb-6">
      <h4 className="font-medium mb-2">{category.name}</h4>
      <div className="bg-gray-50 rounded-lg p-4">
        {/* Column Headers */}
        <div className="flex items-center mb-4">
          <span className="w-1/4"></span>
          <div className="flex space-x-2 flex-1">
            <div className="flex-1 px-3 py-1 text-center rounded bg-[#E6FFE6] text-gray-800 font-medium">
              Good
            </div>
            <div className="flex-1 px-3 py-1 text-center rounded bg-[#FFFFE6] text-gray-800 font-medium">
              Moderate
            </div>
            <div className="flex-1 px-3 py-1 text-center rounded bg-[#FFE6E6] text-gray-800 font-medium">
              Poor
            </div>
          </div>
          <div className="w-12"></div>
        </div>

        {/* Checklist Items */}
        {category.items.map((item) => {
          const itemId = `${category.name}-${item}`;
          const itemData = items[itemId] || { condition: undefined, photos: [] };

          return (
            <div key={item} className="mb-4 last:mb-0">
              <div className="flex items-center space-x-4 mb-2">
                <span className="w-1/4">{item}</span>
                <div className="flex space-x-2 flex-1">
                  {(['good', 'moderate', 'poor'] as const).map((condition) => (
                    <StatusButton
                      key={condition}
                      condition={condition}
                      selected={itemData.condition === condition}
                      onClick={() => onStatusChange(itemId, condition)}
                    />
                  ))}
                </div>
                <div className="w-12 flex items-center justify-center">
                  <input
                    type="file"
                    id={`file-${itemId}`}
                    className="hidden"
                    multiple
                    accept="image/*"
                    onChange={(e) => e.target.files && onPhotoUpload(itemId, e.target.files)}
                  />
                  <label
                    htmlFor={`file-${itemId}`}
                    className="cursor-pointer text-blue-600 hover:text-blue-800"
                  >
                    <Camera className="w-5 h-5" />
                  </label>
                </div>
              </div>
              <PhotoPreview
                photos={itemData.photos}
                onRemove={(index) => onPhotoRemove(itemId, index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChecklistSection;