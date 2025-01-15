import React from 'react';
import { Plus, Tool, AlertCircle } from 'lucide-react';
import ServiceRequestForm from '../ui/ServiceRequestForm';
import ServiceHistory from '../ui/ServiceHistory';

const ServiceRequests = () => {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Submit Service Request</h2>
          <ServiceRequestForm />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Emergency Contact</h2>
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-red-50 rounded-lg">
              <AlertCircle className="w-6 h-6 text-red-500 mr-3" />
              <div>
                <h3 className="font-medium text-red-800">24/7 Emergency Line</h3>
                <p className="text-red-600">1-800-123-4567</p>
              </div>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-medium mb-2">Regular Support Hours</h3>
              <p className="text-sm text-gray-600">
                Monday - Friday: 8:00 AM - 6:00 PM
                <br />
                Saturday: 9:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Maintenance Schedule</h2>
          <button className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
            <Plus className="w-4 h-4 mr-2" />
            Schedule Maintenance
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Equipment</th>
                <th className="text-left py-3">Type</th>
                <th className="text-left py-3">Date</th>
                <th className="text-left py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3">Skid Steer S650</td>
                <td className="py-3">Routine Check</td>
                <td className="py-3">Mar 15, 2024</td>
                <td className="py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Scheduled
                  </span>
                </td>
              </tr>
              {/* Add more rows */}
            </tbody>
          </table>
        </div>
      </div>

      <ServiceHistory />
    </div>
  );
};

export default ServiceRequests;