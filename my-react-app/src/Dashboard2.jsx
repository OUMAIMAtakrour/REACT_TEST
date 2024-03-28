
import React from 'react';
import Header from './header';
import SideMenu from './SideMenu';
import KPISection from './KPISection';
// import TrendChart from './TrendChart';
// import DoughnutChart from './DoughnutChart';
// import SupportTickets from './SupportTickets';
// import CustomerDemographic from './CustomerDemographic';

const Dashboard2 = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow">
        <SideMenu />
        <div className="flex-grow p-6">
          <KPISection />
          <div className="grid grid-cols-2 gap-6 my-6">
          
          </div>
          <div className="grid grid-cols-2 gap-6">
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;