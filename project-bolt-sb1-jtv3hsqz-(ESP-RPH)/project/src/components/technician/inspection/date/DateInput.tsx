import React from 'react';

interface DateInputProps {
  value: string;
  onChange: (date: string) => void;
}

const DateInput: React.FC<DateInputProps> = ({ value, onChange }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Inspection Date</h3>
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
      />
    </div>
  );
};

export default DateInput;