import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Eye } from 'lucide-react';
import { SettingsItem } from './SettingsItem';

const settingsGroups = [
  {
    title: 'Notifications',
    icon: <Bell className="h-5 w-5" />,
    items: [
      { id: 'email', label: 'Email Notifications', type: 'toggle', value: true },
      
    ]
  },
  {
    title: 'Display',
    icon: <Eye className="h-5 w-5" />,
    items: [
      { id: 'theme', label: 'Dark Mode', type: 'toggle', value: false },
     
    ]
  }
];

export const SettingsPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 z-50"
    >
      <div className="p-4 border-b border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Settings</h3>
      </div>
      <div className="max-h-[500px] overflow-y-auto">
        {settingsGroups.map((group, index) => (
          <div key={group.title} className={index > 0 ? 'border-t border-gray-100 dark:border-gray-700' : ''}>
            <div className="p-4">
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-4">
                {group.icon}
                <h4 className="font-medium">{group.title}</h4>
              </div>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <SettingsItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};