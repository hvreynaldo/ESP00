import React from 'react';
import { X } from 'lucide-react';

interface PhotoPreviewProps {
  photos?: File[];
  onRemove: (index: number) => void;
}

const PhotoPreview: React.FC<PhotoPreviewProps> = ({ photos = [], onRemove }) => {
  // Return null if photos is undefined or empty
  if (!photos?.length) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {photos.map((photo, index) => (
        <div key={index} className="relative group">
          <img
            src={URL.createObjectURL(photo)}
            alt={`Preview ${index + 1}`}
            className="w-16 h-16 object-cover rounded"
          />
          <button
            type="button"
            onClick={() => onRemove(index)}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default PhotoPreview;