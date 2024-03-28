import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <div className="text-lg font-bold">NexaVerse</div>
      <div>
        <input
          type="text"
          className="bg-gray-700 text-white px-3 py-2 rounded-md mr-4"
          placeholder="Search transactions, customers, descriptions..."
        />
        <span className="bg-gray-700 text-white px-3 py-2 rounded-md">A</span>
      </div>
    </header>
  );
};

export default Header;