import React from 'react';
import { MapPin, Calendar, QrCode, FileText } from 'lucide-react';
import CurrentRentals from '../ui/CurrentRentals';
import LocationMap from '../ui/LocationMap';

const PickupReturn = () => {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Schedule Pickup/Return</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Location
              </label>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                <select className="flex-1 border border-gray-300 rounded-lg px-3 py-2">
                  <option>Downtown Facility</option>
                  <option>North Branch</option>
                  <option>South Branch</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Date & Time
              </label>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="datetime-local"
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Quick Check-in/out</h2>
          <div className="flex items-center justify-center h-48 border-2 border-dashed border-gray-300 rounded-lg">
            <div className="text-center">
              <QrCode className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">
                Show this QR code at the rental location
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Required Documents</h2>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <FileText className="w-4 h-4 mr-2" />
            Valid Driver's License
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <FileText className="w-4 h-4 mr-2" />
            Insurance Documentation
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <FileText className="w-4 h-4 mr-2" />
            Rental Agreement
          </div>
        </div>
      </div>

      <CurrentRentals />
      <LocationMap />
    </div>
  );
};

export default PickupReturn;