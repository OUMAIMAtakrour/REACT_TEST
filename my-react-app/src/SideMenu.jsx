

import React from 'react';

const SideMenu = () => {
  return (
    <div className="bg-gray-800 text-white py-6 px-4">
      <div className="mb-6">Overview</div>
      <div className="mb-6">Transactions</div>
      <div className="mb-6">Customers</div>
      <div className="mb-6">Reports</div>
      <div className="mb-6">Settings</div>
      <div>Developer</div>
      <div className="mt-auto">Log out</div>
    </div>
  );
};

export default SideMenu;