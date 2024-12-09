import React from 'react';
import { Trophy, ArrowUp, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export const LocationRanking = ({ locations }) => {
  const rankingData = locations.map(location => ({
    ...location,
    score: Math.random() * 100,
    change: Math.random() > 0.5 ? 1 : -1
  })).sort((a, b) => b.score - a.score);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-sky-900 dark:text-sky-100">Location Rankings</h2>
        <Trophy className="h-6 w-6 text-yellow-500" />
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        {rankingData.slice(0,5).map((location, index) => (
          <motion.div
            key={location.id}
            variants={item}
            className="flex items-center justify-between p-4 bg-sky-50 dark:bg-sky-900/30 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold text-sky-700 dark:text-sky-300">#{index + 1}</span>
              <div>
                <h3 className="font-semibold text-sky-900 dark:text-sky-100">{location.name}</h3>
                <p className="text-sm text-sky-600 dark:text-sky-400">{location.riverSection}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold text-sky-900 dark:text-sky-100">
                {location.score.toFixed(1)}
              </span>
              {location.change > 0 ? (
                <ArrowUp className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowDown className="h-4 w-4 text-red-500" />
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};