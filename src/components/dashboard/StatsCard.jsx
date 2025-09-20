// src/components/dashboard/StatsCard.jsx
import React from 'react';

const StatsCard = ({ title, value, subtitle, icon }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
        </div>
        <div className="text-4xl opacity-70">{icon}</div>
      </div>
    </div>
  );
};

export default StatsCard;