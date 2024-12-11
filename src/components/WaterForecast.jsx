import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, ChevronLeft, ChevronRight, SmilePlus, Smile, Waves, Annoyed, Angry } from 'lucide-react';
import { motion } from 'framer-motion';

export const WaterForecast = ({ location }) => {
  const [activeIndex, setActiveIndex] = useState(5); // Default to current day
  
  // Generate forecasts for 5 days past and 5 days future
  const generateForecasts = () => {
    const today = new Date();
    return Array.from({ length: 11 }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() + (i - 5)); // Subtract 5 to get past days
      
      return {
        date,
        quality: Math.random() > 0.5 ? 'good' : Math.random() > 0.5 ? 'moderate' : 'poor',
        ph: 6.5 + Math.random() * 2,
        BOD: 20 + Math.random() * 10,
        dissolvedOxygen: 4 + Math.random() * 4,
        totalcoliform: 150 + Math.random() * 250
      };
    });
  };

  const [forecasts, setForecasts] = useState(generateForecasts());

  useEffect(() => {
    setForecasts(generateForecasts());
  }, [location]);

  const getQualityIcon = (quality) => {
    switch (quality) {
      case 'good':
        return <Smile className="h-6 w-6 text-emerald-500" />;
      case 'moderate':
        return <Annoyed className="h-6 w-6 text-amber-500" />;
      case 'poor':
        return <Angry className="h-6 w-6 text-red-500" />;
      default:
        return null;
    }
  };

  const getQualityColor = (quality) => {
    switch (quality) {
      case 'good':
        return 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30';
      case 'moderate':
        return 'text-amber-500 bg-amber-50 dark:bg-amber-900/30';
      case 'poor':
        return 'text-red-500 bg-red-50 dark:bg-red-900/30';
      default:
        return '';
    }
  };

  const scrollLeft = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const scrollRight = () => {
    if (activeIndex < forecasts.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-sky-900 dark:text-sky-100">Water Quality Forecast</h2>
        <div className="flex items-center space-x-2 space-y-10">
          {/* <button
            onClick={scrollLeft}
            disabled={activeIndex === 0}
            className="p-1 rounded-full hover:bg-sky-50 dark:hover:bg-sky-900/30 disabled:opacity-50"
          >
            <ChevronLeft className="h-5 w-5 text-sky-600 dark:text-sky-400" />
          </button>
          <button
            onClick={scrollRight}
            disabled={activeIndex === forecasts.length - 1}
            className="p-1 rounded-full hover:bg-sky-50 dark:hover:bg-sky-900/30 disabled:opacity-50"
          >
            <ChevronRight className="h-5 w-5 text-sky-600 dark:text-sky-400" />
          </button> */}
        </div>
      </div>

      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto pb-4 custom-scrollbar">
          {forecasts.map((forecast, index) => {
            const isToday = index === 5;
            const isPast = index < 5;
            
            return (
              <div
                key={index}
                className={`flex-shrink-0 w-32 p-3 mt-4 rounded-lg cursor-pointer transition-all ${
                  activeIndex === index
                    ? 'bg-sky-100 dark:bg-sky-900/50 ring-2 ring-sky-500'
                    : 'bg-sky-50 dark:bg-sky-900/30 hover:bg-sky-100 dark:hover:bg-sky-900/40'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="text-center">
                  {isToday && (
                    <span className="inline-block px-2 py-1 text-xs font-medium text-sky-600 dark:text-sky-400 bg-sky-100 dark:bg-sky-900/50 rounded-full mb-2">
                      Today
                    </span>
                  )}
                  <p className="text-sm font-medium text-sky-900 dark:text-sky-100">
                    {forecast.date.toLocaleDateString('en-US', { weekday: 'short' })}
                  </p>
                  <p className="text-xs text-sky-600 dark:text-sky-400">
                    {forecast.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </p>
                  <div className="my-2">{getQualityIcon(forecast.quality)}</div>
                  <div className="text-xs text-sky-800 dark:text-sky-200 space-y-1">
                    <p>pH: {forecast.ph.toFixed(1)}</p>
                    <p>B.O.D: {forecast.BOD.toFixed(1)} mg/L</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 p-4 bg-sky-50 dark:bg-sky-900/30 rounded-lg">
        <h3 className="font-semibold text-sky-900 dark:text-sky-100 mb-4">Detailed Forecast</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
            <p className="text-sm text-sky-600 dark:text-sky-400">pH Level</p>
            <p className="text-lg font-semibold text-sky-900 dark:text-sky-100">
              {forecasts[activeIndex].ph.toFixed(2)}
            </p>
          </div>
          <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
            <p className="text-sm text-sky-600 dark:text-sky-400">B.O.D</p>
            <p className="text-lg font-semibold text-sky-900 dark:text-sky-100">
              {forecasts[activeIndex].BOD.toFixed(1)} mg/L
            </p>
          </div>
          <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
            <p className="text-sm text-sky-600 dark:text-sky-400">Dissolved Oxygen</p>
            <p className="text-lg font-semibold text-sky-900 dark:text-sky-100">
              {forecasts[activeIndex].dissolvedOxygen.toFixed(1)} mg/L
            </p>
          </div>
          <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
            <p className="text-sm text-sky-600 dark:text-sky-400">Total Coliform</p>
            <p className="text-lg font-semibold text-sky-900 dark:text-sky-100">
              {forecasts[activeIndex].totalcoliform.toFixed(0)} MPN/100ml
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};