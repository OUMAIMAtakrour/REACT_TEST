

import React from 'react';

const KPISection = () => {
  return (
    <div className="grid grid-cols-4 gap-6 mb-6">
      <div className="bg-green-500 text-white rounded-md p-4">
        <div className="text-sm">Current MRR</div>
        <div className="text-2xl font-bold">$12.4k</div>
      </div>
      <div className="bg-white rounded-md p-4">
        <div className="text-sm">Current Customers</div>
        <div className="text-2xl font-bold">16,601</div>
      </div>
      <div className="bg-blue-500 text-white rounded-md p-4">
        <div className="text-sm">Active Customers</div>
        <div className="text-2xl font-bold">33%</div>
      </div>
      <div className="bg-teal-500 text-white rounded-md p-4">
        <div className="text-sm">Churn Rate</div>
        <div className="text-2xl font-bold">2%</div>
      </div>
    </div>
  );
};

export default KPISection;