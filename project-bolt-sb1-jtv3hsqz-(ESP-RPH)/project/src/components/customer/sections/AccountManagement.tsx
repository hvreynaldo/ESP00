import React from 'react';
import { CreditCard, FileText, Bell } from 'lucide-react';
import RentalHistory from '../ui/RentalHistory';
import PaymentMethods from '../ui/PaymentMethods';
import DocumentStorage from '../ui/DocumentStorage';
import NotificationPreferences from '../ui/NotificationPreferences';

const AccountManagement = () => {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Payment Methods</h2>
            <button className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
              <CreditCard className="w-4 h-4 mr-2" />
              Add Payment Method
            </button>
          </div>
          <PaymentMethods />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Documents</h2>
            <button className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
              <FileText className="w-4 h-4 mr-2" />
              Upload Document
            </button>
          </div>
          <DocumentStorage />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Notification Preferences</h2>
          <button className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800">
            <Bell className="w-4 h-4 mr-2" />
            Manage Notifications
          </button>
        </div>
        <NotificationPreferences />
      </div>

      <RentalHistory />
    </div>
  );
};

export default AccountManagement;