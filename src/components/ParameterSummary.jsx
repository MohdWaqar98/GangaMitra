import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Droplets, Wind, Thermometer, Scale, Biohazard, Factory } from 'lucide-react';
import Good from '../assets/good.png';

export const ParameterSummary = ({ data }) => {
  const date = new Date(data.timestamp);
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const iconVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: { 
      scale: 1.1,
      rotate: 15,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  const parameters = [
    { 
      label: 'pH Level', 
      value: data.ph, 
      unit: 'pH', 
      color: 'bg-emerald-500',
      icon: <Droplets className="h-6 w-6 text-white" />,
      gradient: 'from-emerald-500 to-emerald-400'
    },
    { 
      label: 'Dissolved Oxygen', 
      value: data.dissolvedOxygen, 
      unit: 'mg/L', 
      color: 'bg-blue-500',
      icon: <Wind className="h-6 w-6 text-white" />,
      gradient: 'from-blue-500 to-blue-400'
    },
    { 
      label: 'B.O.D', 
      value: data.BOD, 
      unit: 'mg/L', 
      color: 'bg-amber-500',
      icon: <Biohazard className="h-6 w-6 text-white" />,
      gradient: 'from-amber-500 to-amber-400'
    },
    { 
      label: 'Total Coliform', 
      value: data.totalcoliform, 
      unit: 'MPN/100ml', 
      color: 'bg-purple-500',
      icon: <Factory className="h-6 w-6 text-white" />,
      gradient: 'from-purple-500 to-purple-400'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 h-[450px] rounded-xl shadow-lg border border-sky-100 dark:border-sky-800"
    >
      <div className="bg-gradient-to-r from-sky-600 to-sky-500 dark:from-sky-800 dark:to-sky-700 text-white p-6 rounded-t-xl">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
          <div>
            <h2 className="text-2xl font-bold">Water Quality Status</h2>
            <div className="flex items-center space-x-4 mt-2">
              <div className="flex items-center space-x-2 text-sky-100">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center space-x-2 text-sky-100">
                <Clock className="h-4 w-4" />
                <span>{formattedTime}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-semibold">{data.location}</div>
            <div className="text-sky-100">Monitoring Station</div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {parameters.map((param, index) => (
            <motion.div
              key={param.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-white to-sky-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 border border-sky-100 dark:border-sky-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm font-medium text-sky-900 dark:text-sky-100">{param.label}</span>
                <motion.div
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className={`p-2 rounded-lg bg-gradient-to-br ${param.gradient} bg-opacity-10 dark:bg-opacity-20`}
                >
                  {param.icon}
                </motion.div>
              </div>
              <div className="flex items-baseline space-x-1">
                <span className="text-2xl font-bold text-sky-900 dark:text-sky-100">
                  {param.value.toFixed(1)}
                </span>
                <span className="text-sm text-sky-600 dark:text-sky-400">{param.unit}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className='text-5xl font-bold text-green-500 dark:text-emerald-400 mt-6 ml-5 '>
          GOOD! 
        </div>
        <div className='text-lg text-sky-600 dark:text-sky-400 mt-4 ml-5'>
          Water quality is within acceptable limits.<br />
          Continue monitoring for any changes.
        </div>
        <img src={Good} alt="" className='ml-auto flex items-center justify-center mt-[-120px] mr-[89px]' width={150} height={150} />
      </div>
    </motion.div>
  );
};