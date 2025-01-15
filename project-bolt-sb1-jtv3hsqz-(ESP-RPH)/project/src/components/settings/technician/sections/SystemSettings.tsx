import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { SettingsCard } from '../../common/SettingsCard';
import { FormField } from '../../common/FormField';
import { useForm } from '../../../../hooks/useForm';

interface SystemData {
  theme: 'light' | 'dark' | 'system';
  fontSize: 'small' | 'medium' | 'large';
  compactMode: boolean;
  autoSave: boolean;
}

const SystemSettings = () => {
  const [isSaving, setIsSaving] = useState(false);

  const { values, handleChange, handleSubmit } = useForm<SystemData>({
    initialValues: {
      theme: 'system',
      fontSize: 'medium',
      compactMode: false,
      autoSave: true
    },
    onSubmit: async (values) => {
      setIsSaving(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Saving system settings:', values);
      } finally {
        setIsSaving(false);
      }
    }
  });

  return (
    <SettingsCard title="System Preferences">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField label="Theme">
            <div className="flex space-x-4">
              {['light', 'dark', 'system'].map((theme) => (
                <label key={theme} className="flex items-center">
                  <input
                    type="radio"
                    name="theme"
                    value={theme}
                    checked={values.theme === theme}
                    onChange={handleChange}
                    className="w-4 h-4 text-yellow-500 border-gray-300 focus:ring-yellow-500"
                  />
                  <span className="ml-2 flex items-center text-sm text-gray-700 capitalize">
                    {theme === 'light' && <Sun className="w-4 h-4 mr-1" />}
                    {theme === 'dark' && <Moon className="w-4 h-4 mr-1" />}
                    {theme}
                  </span>
                </label>
              ))}
            </div>
          </FormField>

          <FormField label="Font Size">
            <select
              name="fontSize"
              value={values.fontSize}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </FormField>
        </div>

        <div className="space-y-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="compactMode"
              checked={values.compactMode}
              onChange={(e) => handleChange({
                target: {
                  name: 'compactMode',
                  value: e.target.checked
                }
              } as any)}
              className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
            />
            <span className="ml-2 text-sm text-gray-700">
              Compact Mode
            </span>
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              name="autoSave"
              checked={values.autoSave}
              onChange={(e) => handleChange({
                target: {
                  name: 'autoSave',
                  value: e.target.checked
                }
              } as any)}
              className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
            />
            <span className="ml-2 text-sm text-gray-700">
              Auto-save Forms
            </span>
          </label>
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

export default SystemSettings;