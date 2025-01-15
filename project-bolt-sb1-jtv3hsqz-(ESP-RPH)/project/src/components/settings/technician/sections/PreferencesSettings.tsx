import React, { useState } from 'react';
import { SettingsCard } from '../../common/SettingsCard';
import { FormField } from '../../common/FormField';
import { useForm } from '../../../../hooks/useForm';

interface PreferencesData {
  language: string;
  timezone: string;
  notifications: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
}

const PreferencesSettings = () => {
  const [isSaving, setIsSaving] = useState(false);

  const { values, handleChange, handleSubmit } = useForm<PreferencesData>({
    initialValues: {
      language: 'en',
      timezone: 'America/New_York',
      notifications: {
        email: true,
        sms: true,
        push: false
      }
    },
    onSubmit: async (values) => {
      setIsSaving(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Saving preferences:', values);
      } finally {
        setIsSaving(false);
      }
    }
  });

  const handleNotificationChange = (type: keyof PreferencesData['notifications']) => {
    handleChange({
      target: {
        name: `notifications.${type}`,
        value: !values.notifications[type]
      }
    } as any);
  };

  return (
    <SettingsCard title="Preferences">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField label="Language">
            <select
              name="language"
              value={values.language}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </FormField>

          <FormField label="Timezone">
            <select
              name="timezone"
              value={values.timezone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="America/New_York">Eastern Time (ET)</option>
              <option value="America/Chicago">Central Time (CT)</option>
              <option value="America/Denver">Mountain Time (MT)</option>
              <option value="America/Los_Angeles">Pacific Time (PT)</option>
            </select>
          </FormField>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-4">Notifications</h4>
          <div className="space-y-4">
            {Object.entries(values.notifications).map(([key, value]) => (
              <label key={key} className="flex items-center">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() => handleNotificationChange(key as keyof PreferencesData['notifications'])}
                  className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                />
                <span className="ml-2 text-sm text-gray-700">
                  {key.charAt(0).toUpperCase() + key.slice(1)} Notifications
                </span>
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

export default PreferencesSettings;