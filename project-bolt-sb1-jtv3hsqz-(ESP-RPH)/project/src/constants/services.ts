import { DollarSign, Wrench, Zap } from 'lucide-react';
import { Service } from '../types';

export const services: Service[] = [
  {
    icon: DollarSign,
    title: 'Financing Options',
    description: 'Flexible plans to fit your budget'
  },
  {
    icon: Wrench,
    title: 'Maintenance Support',
    description: 'Keep your equipment running smoothly'
  },
  {
    icon: Zap,
    title: 'Emergency Solutions',
    description: 'Quick response for urgent needs'
  }
];