import React from 'react';
import { SettingsLayout } from '../common/SettingsLayout';
import ProfileSettings from './sections/ProfileSettings';
import PreferencesSettings from './sections/PreferencesSettings';
import WorkSettings from './sections/WorkSettings';
import SystemSettings from './sections/SystemSettings';

const TechnicianSettings = () => {
  return (
    <SettingsLayout title="Technician Settings">
      <div className="space-y-6">
        <ProfileSettings />
        <PreferencesSettings />
        <WorkSettings />
        <SystemSettings />
      </div>
    </SettingsLayout>
  );
};

export default TechnicianSettings;