import React from 'react';
import { MessageSquare, Phone, Mail } from 'lucide-react';
import FAQSection from '../ui/FAQSection';

const CustomerSupport = () => {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <MessageSquare className="w-8 h-8 text-yellow-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
          <p className="text-gray-600 mb-4">
            Chat with our support team in real-time
          </p>
          <button className="w-full px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
            Start Chat
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <Phone className="w-8 h-8 text-yellow-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
          <p className="text-gray-600 mb-4">
            Call us for immediate assistance
          </p>
          <a
            href="tel:1-800-123-4567"
            className="block w-full px-4 py-2 text-center bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
          >
            1-800-123-4567
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <Mail className="w-8 h-8 text-yellow-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Email Support</h3>
          <p className="text-gray-600 mb-4">
            Send us an email for detailed inquiries
          </p>
          <a
            href="mailto:support@example.com"
            className="block w-full px-4 py-2 text-center bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
          >
            Email Us
          </a>
        </div>
      </div>

      <FAQSection />

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Emergency Contact</h2>
        <div className="p-4 bg-red-50 rounded-lg">
          <h3 className="font-medium text-red-800 mb-2">24/7 Emergency Support</h3>
          <p className="text-red-600">
            For urgent equipment issues or breakdowns, call our emergency line:
            <br />
            <strong>1-800-123-4567</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;