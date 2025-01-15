import React, { useState } from 'react';
import { SettingsCard } from '../../common/SettingsCard';
import { FormField } from '../../common/FormField';
import { useForm } from '../../../../hooks/useForm';

interface WorkData {
  serviceAreas: string[];
  specialties: string[];
  availability: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
  };
  workingHours: {
    start: string;
    end: string;
  };
}

const WorkSettings = () => {
  const [isSaving, setIsSaving] = useState(false);

  const { values, handleChange, handleSubmit } = useForm<WorkData>({
    initialValues: {
      serviceAreas: ['Downtown', 'North Side', 'South Side'],
      specialties: ['Heavy Equipment', 'Hydraulics', 'Electrical'],
      availability: {
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: false,
        sunday: false
      },
      workingHours: {
        start: '09:00',
        end: '17:00'
      }
    },
    onSubmit: async (values) => {
      setIsSaving(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Saving work settings:', values);
      } finally {
        setIsSaving(false);
      }
    }
  });

  const handleAvailabilityChange = (day: keyof WorkData['availability']) => {
    handleChange({
      target: {
        name: `availability.${day}`,
        value: !values.availability[day]
      }
    } as any);
  };

  return (
    <SettingsCard title="Work Settings">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <FormField label="Working Hours">
              <div className="flex space-x-4">
                <input
                  type="time"
                  name="workingHours.start"
                  value={values.workingHours.start}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                <span className="self-center">to</span>
                <input
                  type="time"
                  name="workingHours.end"
                  value={values.workingHours.end}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </FormField>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-4">Availability</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(values.availability).map(([day, isAvailable]) => (
              <label key={day} className="flex items-center">
                <input
                  type="checkbox"
                  checked={isAvailable}
                  onChange={() => handleAvailabilityChange(day as keyof WorkData['availability'])}
                  className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                />
                <span className="ml-2 text-sm text-gray-700 capitalize">
                  {day}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-4">Specialties</h4>
          <div className="flex flex-wrap gap-2">
            {['Heavy Equipment', 'Hydraulics', 'Electrical', 'Mechanical', 'Diagnostics'].map((specialty) => (
              <label key={specialty} className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100">
                <input
                  type="checkbox"
                  checked={values.specialties.includes(specialty)}
                  onChange={(e) => {
                    const newSpecialties = e.target.checked
                      ? [...values.specialties, specialty]
                      : values.specialties.filter(s => s !== specialty);
                    handleChange({
                      target: {
                        name: 'specialties',
                        value: newSpecialties
                      }
                    } as any);
                  }}
                  className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                />
                <span className="ml-2 text-sm text-gray-700">{specialty}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 text-gray-700 hover:text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSaving}
            className={`px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors ${
              isSaving ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </SettingsCard>
  );
};

export default WorkSettings;