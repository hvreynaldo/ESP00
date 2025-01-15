import { ChecklistCategory } from '../types/inspection';

export const checklistCategories: ChecklistCategory[] = [
  {
    name: 'Tires and Rims',
    items: ['Tread', 'PSI', 'Lug Nuts']
  },
  {
    name: 'Lights',
    items: ['Overhead', 'Front', 'Tail', 'Towing', 'Lights Cracked']
  },
  {
    name: 'Undercarriage',
    items: ['Dents', 'Dirt/Debris', 'Rust', 'Fluid Leaks']
  },
  {
    name: 'Tracks',
    items: ['Tension', 'Aligned']
  },
  {
    name: 'Hydraulics',
    items: ['Filter', 'Hoses', 'Fluid']
  },
  {
    name: 'Brakes',
    items: ['Condition', 'Fluid', 'Towing Brakes']
  },
  {
    name: 'Engine',
    items: ['Spark Plugs', 'Air Filter', 'Engine Oil', 'Fuel Tank']
  },
  {
    name: 'Cab Inspection',
    items: ['Controls', 'Interior Condition', 'Dirt/Debris']
  },
  {
    name: 'Windows',
    items: ['Cleanliness', 'Cracks/Chips']
  }
];