import React from 'react';

const OfflineComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-eerieblack">
      <div className="p-6 bg-white rounded shadow-md text-center">
        <h1 className="text-2xl font-display font-bold text-whiteout mb-2">You are offline</h1>
        <p className="text-whiteout font-sans">Please check your internet connection.</p>
      </div>
    </div>
  );
};

export default OfflineComponent;