import React from 'react';
import { DashboardNav } from '../../navigation/DashboardNav';

interface SettingsLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const SettingsLayout: React.FC<SettingsLayoutProps> = ({ title, children }) => (
  <div className="min-h-screen bg-gray-100">
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4">
        <DashboardNav currentPath="/settings" />
      </div>
    </header>
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">{title}</h1>
        {children}
      </div>
    </main>
  </div>
);