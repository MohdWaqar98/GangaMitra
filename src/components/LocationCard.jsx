import React from 'react';
import { MapPin } from 'lucide-react';
import { Card } from './ui/Card';

export const LocationCard = ({ location, isSelected, onClick }) => {
  return (
    <Card 
      className={`p-2  cursor-pointer transition-all ${
        isSelected 
          ? ' bg-sky-400/30 dark:bg-sky-900/10' 
          : 'hover:bg-sky-100 dark:hover:bg-sky-900/20 dark:bg-sky-700/30'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-sky-100 dark:bg-sky-900/50 rounded-lg">
          <MapPin className="h-5 w-5 text-sky-600 dark:text-sky-400" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-sky-900 dark:text-sky-100">{location.name}</h3>
          <p className="text-sm text-sky-600 dark:text-sky-400">{location.riverSection}</p>
        </div>
      </div>
    </Card>
  );
};