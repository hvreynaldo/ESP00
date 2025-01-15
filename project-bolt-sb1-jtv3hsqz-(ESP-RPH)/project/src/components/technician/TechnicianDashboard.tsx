import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { DashboardNav } from '../navigation/DashboardNav';
import EquipmentList from './EquipmentList';

const TechnicianDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <DashboardNav currentPath="/dashboard" />
            <div className="text-gray-600">
              Welcome, {user?.fullName}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Equipment Inspection Dashboard</h1>
        <EquipmentList />
      </main>
    </div>
  );
};

export default TechnicianDashboard;