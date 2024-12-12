import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LocationCard } from './LocationCard';
import { Map } from './Map';
import { Charts } from './Charts';
import { ParameterSummary } from './ParameterSummary';
import { LocationRanking } from './LocationRanking';
import { WaterForecast } from './WaterForecast';
import { ChatBot } from './ChatBot';
import { Footer } from './Footer';
import { locations, generateMockData } from '../utils/mockData';
import { useTheme } from '../context/ThemeContext';

export const Dashboard = () => {
  const { isDarkMode } = useTheme();
  const [selectedLocation, setSelectedLocation] = useState(locations[0].id);
  const [data, setData] = useState(null);
  const [trendData, setTrendData] = useState([]);
  const [selectedParameter, setSelectedParameter] = useState('ph');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const newData = generateMockData(selectedLocation);
    setData(newData);
    setTrendData(prev => [...prev, { timestamp: newData.timestamp, value: newData[selectedParameter] }].slice(-20));

    const interval = setInterval(() => {
      const newData = generateMockData(selectedLocation);
      setData(newData);
      setTrendData(prev => [...prev, { timestamp: newData.timestamp, value: newData[selectedParameter] }].slice(-20));
    }, 5000);

    setIsLoaded(true);

    return () => clearInterval(interval);
  }, [selectedLocation, selectedParameter]);

  if (!data) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark bg-gray-900' : 'bg-sky-50'}`}>
      
      <AnimatePresence>
        {isLoaded && (
          <motion.main
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6"
          >
            {/* First Row: Location Selection and Parameters */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              {/* Location Selection */}
              <motion.div 
                className="lg:col-span-4 xl:col-span-4 order-2 lg:order-1"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md h-[450px]">
                  {/* Added Monitoring Station Text */}
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 pl-20">
                    Monitoring Station
                  </h2>
                  <div className="mt-4 space-y-2 h-[calc(100%-4rem)] overflow-y-auto custom-scrollbar">
                    {locations.map((location, index) => (
                      <motion.div
                        key={location.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <LocationCard
                          location={location}
                          isSelected={location.id === selectedLocation}
                          onClick={() => setSelectedLocation(location.id)}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Parameters Summary */}
              <motion.div 
                variants={itemVariants}
                className="lg:col-span-8 xl:col-span-8 order-1 lg:order-2"
              >
                <ParameterSummary data={data} />
              </motion.div>
            </motion.div>

            {/* Second Row: Charts and Map */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              <motion.div 
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md h-[500px]"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Charts
                  data={trendData}
                  parameter={selectedParameter}
                  setParameter={setSelectedParameter}
                  unit={selectedParameter === 'ph' ? 'pH' : selectedParameter === 'totalcoliform' ? 'MPN/100ml' : 'mg/L'}
                />
              </motion.div>
              <motion.div 
                className="h-[500px]"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Map
                  locations={locations}
                  selectedLocation={selectedLocation}
                  onLocationSelect={setSelectedLocation}
                />
              </motion.div>
            </motion.div>

            {/* Third Row: Location Ranking and Forecast */}
            
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 "
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <LocationRanking locations={locations} />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <WaterForecast location={data.location} />
              </motion.div>
            </motion.div>
          </motion.main>
        )}
      </AnimatePresence>

      <Footer />
      <ChatBot />
    </div>
  );
};
