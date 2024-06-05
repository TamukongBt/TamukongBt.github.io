import React from 'react';

const OfflineComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md text-center">
        <h1 className="text-2xl font-heading font-bold text-gray-700 mb-2">You are offline</h1>
        <p className="text-gray-500 font-display">Please check your internet connection.</p>
      </div>
    </div>
  );
};

export default OfflineComponent;