import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { SettingsCard } from '../../common/SettingsCard';
import { FormField } from '../../common/FormField';
import { useForm } from '../../../../hooks/useForm';

interface ProfileData {
  fullName: string;
  email: string;
  phone: string;
  bio: string;
}

const ProfileSettings = () => {
  const [avatar, setAvatar] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string>('');
  const [isSaving, setIsSaving] = useState(false);

  const { values, errors, handleChange, handleSubmit } = useForm<ProfileData>({
    initialValues: {
      fullName: 'John Smith',
      email: 'john.smith@example.com',
      phone: '(555) 123-4567',
      bio: 'Senior Equipment Technician with 10+ years of experience'
    },
    validate: (values) => {
      const errors: Partial<Record<keyof ProfileData, string>> = {};
      if (!values.email.includes('@')) {
        errors.email = 'Invalid email address';
      }
      return errors;
    },
    onSubmit: async (values) => {
      setIsSaving(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Saving profile:', values);
      } finally {
        setIsSaving(false);
      }
    }
  });

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      setAvatar(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  return (
    <SettingsCard title="Profile Information">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
              {avatarPreview ? (
                <img 
                  src={avatarPreview} 
                  alt="Profile preview" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <Camera className="w-8 h-8" />
                </div>
              )}
            </div>
            <input
              type="file"
              id="avatar"
              accept="image/*"
              className="hidden"
              onChange={handleAvatarChange}
            />
            <label
              htmlFor="avatar"
              className="absolute bottom-0 right-0 bg-yellow-500 text-white p-2 rounded-full cursor-pointer hover:bg-yellow-600 transition-colors"
            >
              <Camera className="w-4 h-4" />
            </label>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-700">Profile Photo</h4>
            <p className="text-sm text-gray-500">
              JPG, GIF or PNG. Max size of 800K
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FormField label="Full Name" error={errors.fullName}>
            <input
              type="text"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </FormField>

          <FormField label="Email" error={errors.email}>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </FormField>

          <FormField label="Phone Number" error={errors.phone}>
            <input
              type="tel"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </FormField>
        </div>

        <FormField label="Bio" error={errors.bio}>
          <textarea
            name="bio"
            value={values.bio}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
        </FormField>

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

export default ProfileSettings;