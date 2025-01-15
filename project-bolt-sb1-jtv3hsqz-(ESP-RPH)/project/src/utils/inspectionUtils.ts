import { InspectionItemDetail } from '../types/inspection';

export const validateInspection = (items: InspectionItemDetail[]): boolean => {
  // Ensure all required items have a status
  return items.every(item => item.status !== null);
};

export const calculateInspectionStatus = (items: InspectionItemDetail[]): 'pass' | 'fail' => {
  const hasFailures = items.some(item => item.status === 'fail');
  return hasFailures ? 'fail' : 'pass';
};

export const formatInspectionDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};