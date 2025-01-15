import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';
import EquipmentRental from './sections/EquipmentRental';
import PickupReturn from './sections/PickupReturn';
import ServiceRequests from './sections/ServiceRequests';
import AccountManagement from './sections/AccountManagement';
import CustomerSupport from './sections/CustomerSupport';

const CustomerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Equipment Rental Dashboard</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="equipment" className="space-y-6">
          <TabsList className="bg-white p-1 rounded-lg shadow-sm">
            <TabsTrigger value="equipment">Equipment Rental</TabsTrigger>
            <TabsTrigger value="pickup">Pickup/Return</TabsTrigger>
            <TabsTrigger value="service">Service Requests</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
          </TabsList>

          <TabsContent value="equipment">
            <EquipmentRental />
          </TabsContent>

          <TabsContent value="pickup">
            <PickupReturn />
          </TabsContent>

          <TabsContent value="service">
            <ServiceRequests />
          </TabsContent>

          <TabsContent value="account">
            <AccountManagement />
          </TabsContent>

          <TabsContent value="support">
            <CustomerSupport />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default CustomerDashboard;