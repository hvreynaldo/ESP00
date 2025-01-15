import React from 'react';
import { SettingsCard } from '../common/SettingsCard';
import { FormField } from '../common/FormField';
import { useForm } from '../../../hooks/useForm';

interface PasswordFormData {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export const PasswordForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm<PasswordFormData>({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    },
    validate: (values) => {
      const errors: Partial<Record<keyof PasswordFormData, string>> = {};
      
      if (values.newPassword.length < 8) {
        errors.newPassword = 'Password must be at least 8 characters';
      }
      
      if (!/[A-Z]/.test(values.newPassword)) {
        errors.newPassword = 'Password must contain at least one uppercase letter';
      }
      
      if (!/[0-9]/.test(values.newPassword)) {
        errors.newPassword = 'Password must contain at least one number';
      }
      
      if (values.newPassword !== values.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
      }
      
      return errors;
    },
    onSubmit: async (values) => {
      console.log('Submitting password change:', values);
    }
  });

  return (
    <SettingsCard title="Change Password">
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField label="Current Password" error={errors.oldPassword}>
          <input
            type="password"
            name="oldPassword"
            value={values.oldPassword}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </FormField>

        <FormField label="New Password" error={errors.newPassword}>
          <input
            type="password"
            name="newPassword"
            value={values.newPassword}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </FormField>

        <FormField label="Confirm New Password" error={errors.confirmPassword}>
          <input
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
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
            Update Password
          </button>
        </div>
      </form>
    </SettingsCard>
  );
};