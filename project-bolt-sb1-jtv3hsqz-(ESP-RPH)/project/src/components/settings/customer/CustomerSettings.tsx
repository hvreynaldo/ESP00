import React from 'react';
import { SettingsLayout } from '../common/SettingsLayout';
import { PersonalInfoForm } from '../forms/PersonalInfoForm';
import { PasswordForm } from '../forms/PasswordForm';
import { CustomerPreferencesForm } from './CustomerPreferencesForm';

const CustomerSettings = () => {
  return (
    <SettingsLayout title="Customer Settings">
      <PersonalInfoForm />
      <PasswordForm />
      <CustomerPreferencesForm />
    </SettingsLayout>
  );
};

export default CustomerSettings;