import React, { useState } from 'react';
import { Bell, Settings, Droplets, Menu, X } from 'lucide-react';
import { NotificationPanel } from './notifications/NotificationPanel';
import { SettingsPanel } from './settings/SettingsPanel';
import { useClickOutside } from '../hooks/useClickOutside';

export const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const notificationsRef = useClickOutside(() => setShowNotifications(false));
  const settingsRef = useClickOutside(() => setShowSettings(false));

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <a href='/' className="bg-sky-100 dark:bg-sky-900 p-2 rounded-lg">
                <Droplets className="h-6 w-6 sm:h-8 sm:w-8 text-sky-600 dark:text-sky-400" />
              </a>
              <a href='/' className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent dark:from-sky-400 dark:to-sky-300">
                Ganga Mitra
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="/playground" className="text-sky-900 dark:text-sky-100 hover:text-sky-700 dark:hover:text-sky-300 font-medium px-3 py-2 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-900 transition-colors">
                Playground
              </a>
              <a href="/about" className="text-sky-900 dark:text-sky-100 hover:text-sky-700 dark:hover:text-sky-300 font-medium px-3 py-2 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-900 transition-colors">
                Ganga Theory
              </a>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative" ref={notificationsRef}>
              <button
                className="p-2 text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900 rounded-full relative transition-colors"
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowSettings(false);
                }}
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full ring-2 ring-white dark:ring-gray-800"></span>
              </button>
              {showNotifications && <NotificationPanel />}
            </div>
            <div className="relative" ref={settingsRef}>
              <button
                className="p-2 text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900 rounded-full transition-colors"
                onClick={() => {
                  setShowSettings(!showSettings);
                  setShowNotifications(false);
                }}
              >
                <Settings className="h-5 w-5" />
              </button>
              {showSettings && <SettingsPanel />}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-sky-900 dark:text-sky-100 hover:text-sky-700 dark:hover:text-sky-300 font-medium px-3 py-2 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-900 transition-colors">
                Playground
              </a>
              <a href="#" className="text-sky-900 dark:text-sky-100 hover:text-sky-700 dark:hover:text-sky-300 font-medium px-3 py-2 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-900 transition-colors">
                Ganga Theory
              </a>
              <div className="flex items-center space-x-4 px-3 py-2">
                <button
                  className="p-2 text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900 rounded-full relative transition-colors"
                  onClick={() => setShowNotifications(!showNotifications)}
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full ring-2 ring-white dark:ring-gray-800"></span>
                </button>
                <button
                  className="p-2 text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900 rounded-full transition-colors"
                  onClick={() => setShowSettings(!showSettings)}
                >
                  <Settings className="h-5 w-5" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};