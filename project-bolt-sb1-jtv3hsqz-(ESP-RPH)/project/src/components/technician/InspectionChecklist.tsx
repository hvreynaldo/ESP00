import React, { useState } from 'react';
import { Camera, Upload, Save, Send } from 'lucide-react';
import { InspectionItem } from '../../types/auth';

const checklistCategories = [
  {
    name: 'Tires and Rims',
    items: ['Tread', 'PSI', 'Lug Nuts']
  },
  {
    name: 'Lights',
    items: ['Overhead', 'Front', 'Tail', 'Towing', 'Lights Cracked']
  },
  {
    name: 'Undercarriage',
    items: ['Dents', 'Dirt/Debris', 'Rust', 'Fluid Leaks']
  },
  {
    name: 'Tracks',
    items: ['Tension', 'Aligned']
  },
  {
    name: 'Hydraulics',
    items: ['Filter', 'Hoses', 'Fluid']
  },
  {
    name: 'Brakes',
    items: ['Condition', 'Fluid', 'Towing Brakes']
  },
  {
    name: 'Engine',
    items: ['Spark Plugs', 'Air Filter', 'Engine Oil', 'Fuel Tank']
  },
  {
    name: 'Cab Inspection',
    items: ['Controls', 'Interior Condition', 'Dirt/Debris']
  },
  {
    name: 'Windows',
    items: ['Cleanliness', 'Cracks/Chips']
  }
];

interface InspectionChecklistProps {
  equipmentId: string;
}

const InspectionChecklist: React.FC<InspectionChecklistProps> = ({ equipmentId }) => {
  const [customerName, setCustomerName] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [items, setItems] = useState<InspectionItem[]>([]);
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [signature, setSignature] = useState('');

  const handleConditionChange = (itemId: string, condition: 'good' | 'moderate' | 'poor') => {
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === itemId ? { ...item, condition } : item
      )
    );
  };

  const handleFileUpload = (itemId: string, files: FileList) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId
          ? { ...item, attachments: [...item.attachments, ...Array.from(files)] }
          : item
      )
    );
  };

  const handleSubmit = async () => {
    // Implementation for submitting the inspection report
    console.log('Submitting inspection report...');
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={new Date().toISOString().split('T')[0]}
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Customer Name</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Inspection Checklist</h3>
        {checklistCategories.map((category) => (
          <div key={category.name} className="mb-6">
            <h4 className="font-medium mb-2">{category.name}</h4>
            <div className="bg-gray-50 rounded-lg p-4">
              {category.items.map((item) => (
                <div key={item} className="flex items-center space-x-4 mb-2">
                  <span className="w-1/4">{item}</span>
                  <div className="flex space-x-2">
                    {(['good', 'moderate', 'poor'] as const).map((condition) => (
                      <button
                        key={condition}
                        className={`px-3 py-1 rounded ${
                          condition === 'good'
                            ? 'bg-green-100 text-green-800'
                            : condition === 'moderate'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                        onClick={() => handleConditionChange(`${category.name}-${item}`, condition)}
                      >
                        {condition.charAt(0).toUpperCase() + condition.slice(1)}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="file"
                      id={`file-${category.name}-${item}`}
                      className="hidden"
                      multiple
                      onChange={(e) => e.target.files && handleFileUpload(`${category.name}-${item}`, e.target.files)}
                    />
                    <label
                      htmlFor={`file-${category.name}-${item}`}
                      className="cursor-pointer text-blue-600 hover:text-blue-800"
                    >
                      <Camera className="w-5 h-5" />
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Additional Notes
        </label>
        <textarea
          className="w-full rounded-md border-gray-300 shadow-sm"
          rows={4}
          value={additionalNotes}
          onChange={(e) => setAdditionalNotes(e.target.value)}
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          onClick={() => console.log('Saving draft...')}
        >
          <Save className="w-5 h-5 inline-block mr-2" />
          Save Draft
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
          onClick={handleSubmit}
        >
          <Send className="w-5 h-5 inline-block mr-2" />
          Submit Report
        </button>
      </div>
    </div>
  );
};

export default InspectionChecklist;