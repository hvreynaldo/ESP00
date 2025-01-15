import React from 'react';

interface EquipmentIconProps {
  className?: string;
}

export const SkidSteerIcon: React.FC<EquipmentIconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 20h20v4H6z" fill="currentColor"/>
    <path d="M8 16h16v4H8z" fill="currentColor"/>
    <path d="M4 24h24v2H4z" fill="currentColor"/>
    <circle cx="8" cy="26" r="2" fill="currentColor"/>
    <circle cx="24" cy="26" r="2" fill="currentColor"/>
  </svg>
);

export const ExcavatorIcon: React.FC<EquipmentIconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 20h12v8H4z" fill="currentColor"/>
    <path d="M16 12l8 8v8h-8z" fill="currentColor"/>
    <path d="M24 20l4-4v8h-4z" fill="currentColor"/>
    <circle cx="8" cy="28" r="2" fill="currentColor"/>
    <circle cx="20" cy="28" r="2" fill="currentColor"/>
  </svg>
);

export const ForkliftIcon: React.FC<EquipmentIconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 12h8v12H8z" fill="currentColor"/>
    <path d="M16 16h8v8h-8z" fill="currentColor"/>
    <path d="M4 24h24v2H4z" fill="currentColor"/>
    <path d="M6 14h4v6H6z" fill="currentColor"/>
    <circle cx="8" cy="26" r="2" fill="currentColor"/>
    <circle cx="24" cy="26" r="2" fill="currentColor"/>
  </svg>
);