import React from 'react';
import { FormField } from '../common/FormField';
import { SettingsCard } from '../common/SettingsCard';
import { useForm } from '../../../hooks/useForm';

interface PersonalInfoFormData {
  name: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
}

export const PersonalInfoForm: React.FC = () => {
  const { values, errors, handleChange, handleSubmit } = useForm<PersonalInfoFormData>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      street: '',
      city: '',
      state: '',
      postalCode: ''
    },
    onSubmit: async (values) => {
      console.log('Submitting personal info:', values);
    },
    validate: (values) => {
      const errors: Partial<Record<keyof PersonalInfoFormData, string>> = {};
      if (!values.email.includes('@')) {
        errors.email = 'Invalid email address';
      }
      return errors;
    }
  });

  return (
    <SettingsCard title="Personal Information">
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField label="Full Name" error={errors.name}>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </FormField>

        <FormField label="Email" error={errors.email}>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </FormField>

        <FormField label="Phone Number" error={errors.phone}>
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </FormField>

        <div className="grid grid-cols-2 gap-4">
          <FormField label="Street Address" error={errors.street}>
            <input
              type="text"
              name="street"
              value={values.street}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </FormField>

          <FormField label="City" error={errors.city}>
            <input
              type="text"
              name="city"
              value={values.city}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </FormField>

          <FormField label="State" error={errors.state}>
            <input
              type="text"
              name="state"
              value={values.state}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </FormField>

          <FormField label="Postal Code" error={errors.postalCode}>
            <input
              type="text"
              name="postalCode"
              value={values.postalCode}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </FormField>
        </div>

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