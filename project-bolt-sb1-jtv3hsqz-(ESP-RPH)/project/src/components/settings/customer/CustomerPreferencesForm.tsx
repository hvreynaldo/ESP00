import React from 'react';
import { SettingsCard } from '../common/SettingsCard';
import { FormField } from '../common/FormField';
import { useForm } from '../../../hooks/useForm';

interface CustomerPreferencesData {
  notificationPreference: string;
  defaultEquipmentCategories: string[];
}

export const CustomerPreferencesForm = () => {
  const { values, handleChange, handleSubmit } = useForm<CustomerPreferencesData>({
    initialValues: {
      notificationPreference: 'email',
      defaultEquipmentCategories: []
    },
    onSubmit: async (values) => {
      console.log('Submitting preferences:', values);
    }
  });

  const equipmentCategories = [
    'Heavy Equipment',
    'Power Tools',
    'Construction',
    'Landscaping'
  ];

  return (
    <SettingsCard title="Preferences">
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField label="Notification Preferences">
          <select
            name="notificationPreference"
            value={values.notificationPreference}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="email">Email Only</option>
            <option value="sms">SMS Only</option>
            <option value="both">Email & SMS</option>
          </select>
        </FormField>

        <FormField label="Default Equipment Categories">
          <div className="space-y-2">
            {equipmentCategories.map(category => (
              <label key={category} className="flex items-center">
                <input
                  type="checkbox"
                  name="defaultEquipmentCategories"
                  value={category}
                  checked={values.defaultEquipmentCategories.includes(category)}
                  onChange={(e) => {
                    const newCategories = e.target.checked
                      ? [...values.defaultEquipmentCategories, category]
                      : values.defaultEquipmentCategories.filter(c => c !== category);
                    handleChange({
                      target: {
                        name: 'defaultEquipmentCategories',
                        value: newCategories
                      }
                    } as any);
                  }}
                  className="mr-2"
                />
                {category}
              </label>
            ))}
          </div>
        </FormField>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
          >
            Save Changes
          </button>
        </div>
      </form>
    </SettingsCard>
  );
};