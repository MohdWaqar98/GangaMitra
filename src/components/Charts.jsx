import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

export const Charts = ({ data, parameter, setParameter, unit }) => {
  const parameters = [
    { value: 'ph', label: 'pH Level' },
    { value: 'dissolvedOxygen', label: 'Dissolved Oxygen' },
    { value: 'BOD', label: 'B.O.D' },
    { value: 'totalcoliform', label: 'Total Coliform' }
  ];

  const getParameterColor = () => {
    switch (parameter) {
      case 'ph': return '#0284c7';
      case 'dissolvedOxygen': return '#0891b2';
      case 'BOD': return '#0369a1';
      case 'totalcoliform': return '#0ea5e9';
      default: return '#0284c7';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="h-full flex flex-col"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-sky-900 dark:text-sky-100">Parameter Analysis</h2>
        <motion.select
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          value={parameter}
          onChange={(e) => setParameter(e.target.value)}
          className="px-4 py-2 bg-white dark:bg-gray-800 border border-sky-200 dark:border-sky-700 rounded-lg text-sky-800 dark:text-sky-200 shadow-sm hover:border-sky-300 dark:hover:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
        >
          {parameters.map(param => (
            <option key={param.value} value={param.value}>
              {param.label}
            </option>
          ))}
        </motion.select>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex-1"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={getParameterColor()} stopOpacity={0.1} />
                <stop offset="95%" stopColor={getParameterColor()} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="timestamp"
              tickFormatter={(value) => new Date(value).toLocaleTimeString()}
              stroke="#64748b"
              fontSize={12}
            />
            <YAxis
              stroke="#64748b"
              fontSize={12}
              label={{
                value: unit,
                angle: -90,
                position: 'insideLeft',
                style: { textAnchor: 'middle', fill: '#64748b' }
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                borderRadius: '0.5rem',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
              labelFormatter={(value) => new Date(value).toLocaleString()}
              formatter={(value) => [`${value.toFixed(2)} ${unit}`, parameters.find(p => p.value === parameter)?.label]}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke={getParameterColor()}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6, strokeWidth: 2, fill: '#fff' }}
              fill="url(#colorValue)"
            />

            {/* Threshold lines */}
            {parameter === 'ph' && (
              <>
                <Line
                  type="monotone"
                  dataKey={() => 6.5}
                  stroke="#facc15" // Yellow for lower limit
                  strokeDasharray="5 5"
                  strokeWidth={2}
                  dot={false}
                  name="Lower Limit"
                />
                <Line
                  type="monotone"
                  dataKey={() => 8.7}
                  stroke="#ef4444" // Red for upper limit
                  strokeDasharray="5 5"
                  strokeWidth={2}
                  dot={false}
                  name="Upper Limit"
                />
              </>
            )}
            {parameter === 'dissolvedOxygen' && (
              <>
                <Line
                  type="monotone"
                  dataKey={() => 2}
                  stroke="#facc15" // Yellow for lower limit
                  strokeDasharray="5 5"
                  strokeWidth={2}
                  dot={false}
                  name="Lower Limit"
                />
                <Line
                  type="monotone"
                  dataKey={() => 7}
                  stroke="#facc15" // Yellow for lower limit
                  strokeDasharray="5 5"
                  strokeWidth={2}
                  dot={false}
                  name="Upper Limit"
                />
              </>
              
            )}
            {parameter === 'BOD' && (
              <>
                <Line
                  type="monotone"
                  dataKey={() => 1.9}
                  stroke="#facc15" // Yellow for lower limit
                  strokeDasharray="5 5"
                  strokeWidth={2}
                  dot={false}
                  name="Lower Limit"
                />
                <Line
                  type="monotone"
                  dataKey={() => 10.3}
                  stroke="#ef4444" // Red for upper limit
                  strokeDasharray="5 5"
                  strokeWidth={2}
                  dot={false}
                  name="Upper Limit"
                />
              </>
            )}
            {parameter === 'totalcoliform' && (
              <>
                <Line
                  type="monotone"
                  dataKey={() => 0}
                  stroke="#facc15" // Yellow for lower limit
                  strokeDasharray="5 5"
                  strokeWidth={2}
                  dot={false}
                  name="Lower Limit"
                />
                <Line
                  type="monotone"
                  dataKey={() => 501}
                  stroke="#ef4444" // Red for upper limit
                  strokeDasharray="5 5"
                  strokeWidth={2}
                  dot={false}
                  name="Upper Limit"
                />
              </>
            )}
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  );
};
