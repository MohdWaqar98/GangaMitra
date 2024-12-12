import React from 'react';
import {gangamitralogo } from 'assets';

export const Header = () => {
  return (
    <div className="bg-sky-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
           <img src="src/assets/gangamitralogo.png" alt="" />
            <div>
              <h1 className="text-2xl font-bold text-white">Ganga Water Quality Monitor</h1>
              <p className="text-sm text-sky-100">Real-time monitoring and analysis system</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-sky-100">Last sync</div>
            <div className="text-base font-medium text-white">
              {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};