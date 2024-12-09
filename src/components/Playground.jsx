import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Beaker, Droplets, Wind, Thermometer, Scale, Play, RotateCcw, Save } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const Playground = () => {
  const [parameters, setParameters] = useState({
    ph: 7.0,
    dissolvedOxygen: 6.0,
    temperature: 25.0,
    tds: 15
  });

  const [simulationData, setSimulationData] = useState([]);
  const [isSimulating, setIsSimulating] = useState(false);

  const startSimulation = () => {
    setIsSimulating(true);
    const baseData = [];
    for (let i = 0; i < 10; i++) {
      baseData.push({
        time: i,
        ph: parameters.ph + (Math.random() - 0.7) * 0.1,
        dissolvedOxygen: parameters.dissolvedOxygen + (Math.random() - 0.5) * 1,
        temperature: parameters.temperature + (Math.random() - 0.5) * 2,
        tds: parameters.tds + (Math.random() - 0.5) * 1
      });
    }
    setSimulationData(baseData);
  };

  const resetSimulation = () => {
    setIsSimulating(false);
    setSimulationData([]);
  };

  const parameterControls = [
    { 
      id: 'ph',
      label: 'pH Level',
      min: 0,
      max: 14,
      step: 0.1,
      icon: <Beaker className="h-5 w-5 text-sky-500" />,
      unit: 'pH'
    },
    {
      id: 'dissolvedOxygen',
      label: 'Dissolved Oxygen',
      min: 0,
      max: 12,
      step: 0.1,
      icon: <Wind className="h-5 w-5 text-sky-500" />,
      unit: 'mg/L'
    },
    {
      id: 'temperature',
      label: 'Temperature',
      min: 0,
      max: 40,
      step: 0.5,
      icon: <Thermometer className="h-5 w-5 text-sky-500" />,
      unit: '°C'
    },
    {
      id: 'tds',
      label: 'Total Dissolved Solids',
      min: 0,
      max: 1000,
      step: 10,
      icon: <Scale className="h-5 w-5 text-sky-500" />,
      unit: 'mg/L'
    }
  ];

  return (
    <div className="min-h-screen bg-sky-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-sky-900 dark:text-sky-100">Water Quality Simulator</h1>
              <p className="text-sky-600 dark:text-sky-400 mt-1">
                Experiment with different water quality parameters
              </p>
            </div>
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={startSimulation}
                disabled={isSimulating}
                className="flex items-center space-x-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Play className="h-4 w-4" />
                <span>Start Simulation</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetSimulation}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Reset</span>
              </motion.button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Parameter Controls */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-sky-900 dark:text-sky-100 mb-4">
                Parameter Controls
              </h2>
              {parameterControls.map((control) => (
                <motion.div
                  key={control.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-sky-50 dark:bg-gray-700 p-4 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {control.icon}
                      <label className="text-sky-900 dark:text-sky-100 font-medium">
                        {control.label}
                      </label>
                    </div>
                    <span className="text-sky-600 dark:text-sky-400">
                      {parameters[control.id]} {control.unit}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={control.min}
                    max={control.max}
                    step={control.step}
                    value={parameters[control.id]}
                    onChange={(e) => setParameters(prev => ({
                      ...prev,
                      [control.id]: parseFloat(e.target.value)
                    }))}
                    className="w-full h-2 bg-sky-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-sky-600 dark:text-sky-400 mt-1">
                    <span>{control.min}</span>
                    <span>{control.max} {control.unit}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Simulation Results */}
            <div>
              <h2 className="text-lg font-semibold text-sky-900 dark:text-sky-100 mb-4">
                Simulation Results
              </h2>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-sky-100 dark:border-gray-700 h-[400px]">
                {simulationData.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={simulationData}>
                      <CartesianGrid strokeDasharray="1 1" strokeWidth={1} stroke="#e5e7eb" />
                      <XAxis 
                        dataKey="time" 
                        label={{ value: 'Time (hours)', position: 'bottom' }}
                      />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="ph" stroke="#3b82f6" strokeWidth={5}  name="pH" />
                      <Line type="monotone" dataKey="dissolvedOxygen" stroke="#10b981" strokeWidth={5} name="DO" />
                      <Line type="monotone" dataKey="temperature" stroke="#f59e0b" strokeWidth={5} name="Temp" />
                      <Line type="monotone" dataKey="tds" stroke="#8b5cf6" strokeWidth={5} name="TDS" />
                    </LineChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <p className="text-sky-600 dark:text-sky-400">
                      Start the simulation to see results
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};